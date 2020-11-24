import tensorflow as tf
import tensorflow_probability as tfp
from copy import copy
from bayes_vi.inference import Inference
from bayes_vi.utils import make_transformed_log_prob, to_ordered_dict
from bayes_vi.inference.mcmc.sample_results import SampleResult

tfb = tfp.bijectors


class SGD(Inference):

    def __init__(self, model, dataset):
        super(SGD, self).__init__(model=model, dataset=dataset)
        self.state = None
        self.num_examples = int(self.dataset.cardinality())
        self.data_batch_ratio = None
        self.recorded_states = []
        self.optimizer = None
        self.unconstrain_flatten_and_merge = lambda state: self.model.split_unconstrained_bijector.inverse(
            self.model.flatten_unconstrained_sample(
                self.model.unconstrain_sample(state.values())
            )
        )
        self.split_reshape_constrain_and_to_dict = lambda state: to_ordered_dict(
            self.model.param_names,
            self.model.constrain_sample(
                self.model.reshape_flat_unconstrained_sample(
                    self.model.split_unconstrained_bijector.forward(state)
                )
            )
        )



    def fit(self,
            initial_state,
            max_learning_rate=1.0,
            preconditioner_decay_rate=0.95,
            burnin=25,
            burnin_max_learning_rate=1e-06,
            batch_size=25,
            repeat=1,
            shuffle=1000,
            epochs=10):
        self.state = tf.Variable(self.unconstrain_flatten_and_merge(initial_state))
        self.data_batch_ratio = self.num_examples // batch_size
        self.optimizer = tfp.optimizer.VariationalSGD(batch_size=batch_size,
                                                      total_num_examples=self.num_examples,
                                                      max_learning_rate=max_learning_rate,
                                                      preconditioner_decay_rate=preconditioner_decay_rate,
                                                      burnin=burnin,
                                                      burnin_max_learning_rate=burnin_max_learning_rate)
        
        losses = self.training(batch_size=batch_size, repeat=repeat, shuffle=shuffle, epochs=epochs)

        final_state = self.split_reshape_constrain_and_to_dict(self.state)
        samples = list(self.split_reshape_constrain_and_to_dict(tf.stack(self.recorded_states[burnin:])).values())
        print(samples)
        sample_results = SampleResult(model=self.model, samples=samples, trace=None)
        return losses, final_state, sample_results

    @tf.function
    def loss(self, state, y):
        # TODO: base loss on mean and scale down prior log probs for batched version
        return - self.model.unnormalized_log_posterior(self.split_reshape_constrain_and_to_dict(self.state), y) \
               - self.model.target_log_prob_correction_forward(state)

    def training(self, batch_size, repeat, shuffle, epochs):
        losses = []
        for epoch in range(1, epochs + 1):
            for x, y in self.dataset.repeat(repeat).shuffle(shuffle).batch(batch_size):
                # self.recorded_states.append(
                #     list(self.split_reshape_constrain_and_to_dict(self.state).values())
                # )
                self.recorded_states.append(copy(self.state))
                self.model = self.model(x)
                loss = self.train_step(y)
                losses.append(loss)
        return losses

    @tf.function
    def train_step(self, y):
        with tf.GradientTape() as tape:
            loss = self.loss(self.state, y)
        # Compute and apply gradients
        trainable_vars = tape.watched_variables()
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        return loss
