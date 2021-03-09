Search.setIndex({docnames:["bayes_vi","bayes_vi.inference","bayes_vi.inference.mcmc","bayes_vi.inference.vi","bayes_vi.model","bayes_vi.utils","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["bayes_vi.rst","bayes_vi.inference.rst","bayes_vi.inference.mcmc.rst","bayes_vi.inference.vi.rst","bayes_vi.model.rst","bayes_vi.utils.rst","index.rst","modules.rst"],objects:{"":{bayes_vi:[0,0,0,"-"]},"bayes_vi.inference":{inference:[1,0,0,"-"],mcmc:[2,0,0,"-"],vi:[3,0,0,"-"]},"bayes_vi.inference.inference":{Inference:[1,1,1,""]},"bayes_vi.inference.inference.Inference":{dataset:[1,2,1,""],fit:[1,3,1,""],model:[1,2,1,""],num_datapoints:[1,2,1,""]},"bayes_vi.inference.mcmc":{mcmc:[2,0,0,"-"],sample_results:[2,0,0,"-"],stepsize_adaptation_kernels:[2,0,0,"-"],transition_kernels:[2,0,0,"-"]},"bayes_vi.inference.mcmc.mcmc":{MCMC:[2,1,1,""]},"bayes_vi.inference.mcmc.mcmc.MCMC":{distribution:[2,2,1,""],features:[2,2,1,""],fit:[2,3,1,""],sample_chain:[2,3,1,""],target_log_prob:[2,2,1,""],targets:[2,2,1,""],transition_kernel:[2,2,1,""]},"bayes_vi.inference.mcmc.sample_results":{SampleResult:[2,1,1,""]},"bayes_vi.inference.mcmc.sample_results.SampleResult":{accept_ratios:[2,2,1,""],samples:[2,2,1,""],trace:[2,2,1,""]},"bayes_vi.inference.mcmc.stepsize_adaptation_kernels":{DualAveragingStepSizeAdaptation:[2,1,1,""],SimpleStepSizeAdaptation:[2,1,1,""],StepSizeAdaptationKernel:[2,1,1,""]},"bayes_vi.inference.mcmc.transition_kernels":{HamiltonianMonteCarlo:[2,1,1,""],NoUTurnSampler:[2,1,1,""],RandomWalkMetropolis:[2,1,1,""],TransitionKernel:[2,1,1,""]},"bayes_vi.inference.mcmc.transition_kernels.HamiltonianMonteCarlo":{kernel:[2,2,1,""],name:[2,2,1,""],num_leapfrog_steps:[2,2,1,""],state_gradients_are_stopped:[2,2,1,""],step_size:[2,2,1,""],step_size_adaptation_kernel:[2,2,1,""],trace_fn:[2,3,1,""],transforming_bijectors:[2,2,1,""]},"bayes_vi.inference.mcmc.transition_kernels.NoUTurnSampler":{kernel:[2,2,1,""],max_energy_diff:[2,2,1,""],max_tree_depth:[2,2,1,""],name:[2,2,1,""],parallel_iterations:[2,2,1,""],step_size:[2,2,1,""],step_size_adaptation_kernel:[2,2,1,""],trace_fn:[2,3,1,""],transforming_bijector:[2,2,1,""],unrolled_leapfrog_steps:[2,2,1,""]},"bayes_vi.inference.mcmc.transition_kernels.RandomWalkMetropolis":{kernel:[2,2,1,""],name:[2,2,1,""],new_state_fn:[2,2,1,""],trace_fn:[2,3,1,""],transforming_bijectors:[2,2,1,"id0"]},"bayes_vi.inference.vi":{flow_bijectors:[3,0,0,"-"],surrogate_posteriors:[3,0,0,"-"],vi:[3,0,0,"-"]},"bayes_vi.inference.vi.flow_bijectors":{AffineFlow:[3,1,1,""],HamiltonianFlow:[3,1,1,""],make_energy_fn:[3,4,1,""],make_scale_fn:[3,4,1,""],make_shift_fn:[3,4,1,""]},"bayes_vi.inference.vi.flow_bijectors.AffineFlow":{forward_log_det_jacobian:[3,3,1,""],inverse_log_det_jacobian:[3,3,1,""]},"bayes_vi.inference.vi.surrogate_posteriors":{ADVI:[3,1,1,""],NormalizingFlow:[3,1,1,""],SurrogatePosterior:[3,1,1,""]},"bayes_vi.inference.vi.surrogate_posteriors.NormalizingFlow":{base_distribution:[3,2,1,""],extra_ndims:[3,2,1,""],flow_bijector:[3,2,1,""],posterior_lift_distribution:[3,2,1,""]},"bayes_vi.inference.vi.surrogate_posteriors.SurrogatePosterior":{approx_joint_marginal_posteriors:[3,3,1,""],distribution:[3,2,1,""],dtype:[3,2,1,""],event_ndims:[3,2,1,""],get_corrected_target_log_prob_fn:[3,3,1,""],model:[3,2,1,""],reshape_sample_bijector:[3,2,1,""],unconstrained_event_ndims:[3,2,1,""]},"bayes_vi.inference.vi.vi":{VI:[3,1,1,""]},"bayes_vi.inference.vi.vi.VI":{discrepancy_fn:[3,2,1,""],distribution:[3,2,1,""],features:[3,2,1,""],fit:[3,3,1,""],make_optimizer_step_fn:[3,3,1,""],make_stochastic_optimizer_step_fn:[3,3,1,""],safe_discrepancy_fn:[3,3,1,""],stochastic_fit:[3,3,1,""],surrogate_posterior:[3,2,1,""],target_log_prob:[3,2,1,""],targets:[3,2,1,""]},"bayes_vi.model":{model:[4,0,0,"-"]},"bayes_vi.model.model":{Model:[4,1,1,""],sample:[4,4,1,""]},"bayes_vi.model.model.Model":{blockwise_constraining_bijector:[4,2,1,""],constraining_bijectors:[4,2,1,""],dtypes:[4,2,1,""],flat_param_event_ndims:[4,2,1,""],flat_param_event_shape:[4,2,1,""],flat_unconstrained_param_event_ndims:[4,2,1,""],flat_unconstrained_param_event_shape:[4,2,1,""],get_joint_distribution:[4,3,1,""],get_param_distributions:[4,3,1,""],get_posterior_predictive_distribution:[4,3,1,""],is_generative_model:[4,2,1,""],joint_constraining_bijector:[4,2,1,""],likelihood:[4,2,1,""],param_event_shape:[4,2,1,""],param_names:[4,2,1,""],prior_distribution:[4,2,1,""],priors:[4,2,1,""],reshape_flat_param_bijector:[4,2,1,""],reshape_flat_unconstrained_param_bijector:[4,2,1,""],split_flat_param_bijector:[4,2,1,""],split_flat_unconstrained_param_bijector:[4,2,1,""],unconstrained_param_event_shape:[4,2,1,""]},"bayes_vi.utils":{compose:[5,4,1,""],datasets:[5,0,0,"-"],symplectic_integrators:[5,0,0,"-"],to_ordered_dict:[5,4,1,""]},"bayes_vi.utils.datasets":{make_dataset_from_df:[5,4,1,""]},"bayes_vi.utils.symplectic_integrators":{LeapfrogIntegrator:[5,1,1,""]},"bayes_vi.utils.symplectic_integrators.LeapfrogIntegrator":{solve:[5,3,1,""]},bayes_vi:{inference:[1,0,0,"-"],model:[4,0,0,"-"],utils:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"1000":2,"10000":3,"1024":2,"4000":2,"boolean":[2,3],"case":2,"class":[1,2,3,4,5],"default":[2,3,5],"final":[3,5],"float":2,"function":[2,3,4,5],"int":[1,2,3,4,5],"new":2,"return":[2,3,4,5],"static":[2,3],"true":[2,3],"while":4,Has:1,One:5,Ops:2,The:[2,3,4,5],There:4,_forward_log_det_jacobian:3,_invers:3,_inverse_log_det_jacobian:3,accept:2,accept_ratio:2,achiev:2,adam:3,adapt:2,adaptation_r:2,addit:4,advi:3,affin:3,affine_flow:3,affineflow:3,algorithm:[1,2],all:3,allow:[2,3,4],ani:1,appli:[2,4,5],approx_joint_marginal_posterior:3,approx_posterior:3,approxim:[2,3],arg:[1,4],argument:[1,3,4],around:2,arrai:3,assum:2,attribut:[3,4],augment:3,automat:3,bar:[2,3],base:[1,2,3,4,5],base_distribut:3,batch_siz:3,bayes_vi:6,bayesian:[0,1,2,3,4],befor:2,being:[2,3],between:2,bijector:[2,3,4],binari:2,blockwise_constraining_bijector:4,bool:[2,3,4],both:3,bound:2,broadcast:[2,3],built:2,burnin:2,callabl:[2,3,4,5],can:5,carlo:[0,1],center:2,chain:[0,1,2,4],chosen:[4,5],collect:[2,4,5],combin:2,compon:4,compos:5,composit:5,comput:[3,5],concaten:4,condit:[2,3,4],configur:5,consist:[1,4,5],constrain:[2,3,4],constraining_bijector:4,construct:[3,4,5],contain:[0,1,2,3,4],content:[6,7],context:2,correct:3,creat:[2,3,5],current_st:2,data:[1,4,5],datafram:5,datapoint:1,dataset:[0,1,2,3,4,7],datatyp:3,decay_r:2,decor:4,decorrel:2,deep:2,defin:[2,3,4,5],depend:5,depth:2,deriv:4,det:3,detail:2,determin:3,deviat:2,dg_i:3,diagon:3,dict:[2,3,4,5],diffeomorph:4,differ:[1,2,3],differenti:3,dimens:[3,4,5],direct:2,discrep:3,discrepancy_fn:3,distribut:[2,3,4],diverg:[2,3],drop:3,dtype:[3,4],dualaveragingstepsizeadapt:2,each:[2,3,4],effici:2,element:3,energi:[2,3,5],epoch:3,equal:3,evalu:3,event:[3,4],event_dim:3,event_ndim:3,everi:[1,3],evolut:5,exampl:[1,3],exce:2,expans:2,expect:3,explicitli:2,exploration_shrinkag:2,exponenti:2,extra:3,extra_ndim:3,fals:[2,3],faster:2,featur:[1,2,3,4,5],feature_nam:5,first:3,fit:[1,2,3],flat_param_event_ndim:4,flat_param_event_shap:4,flat_unconstrained_param_event_ndim:4,flat_unconstrained_param_event_shap:4,flatten:4,float32:3,flow:3,flow_bijector:[0,1],fns:5,form:5,format_features_a:5,forward:[3,4],forward_log_det_jacobian:3,forward_min_event_ndim:3,from:[2,3,4,5],full:3,fundament:4,furthermor:3,g_i:3,gener:[2,4],get_corrected_target_log_prob_fn:3,get_joint_distribut:4,get_param_distribut:4,get_posterior_predictive_distribut:4,give:3,given:[4,5],greater:3,hamiltonian:[3,5],hamiltonian_flow:3,hamiltonianflow:3,hamiltonianmontecarlo:2,has:[1,3,4],help:2,hidden_lay:3,histori:3,hmc:2,hmc_kernel:2,hmc_like_log_accept_prob_getter_fn:2,hmc_like_step_size_getter_fn:2,hmc_like_step_size_setter_fn:2,ignor:2,ildj:3,implement:[1,2,3],impli:2,implicitli:2,incompat:3,independ:3,index:[5,6],indic:[2,3,4],individu:5,induc:2,infer:[0,7],infinit:3,initi:[2,5],initial_st:[2,5],inject:3,input:[2,3],instanc:3,integ:2,integr:[2,5],intern:4,invers:[3,4],inverse_log_det_jacobian:3,inverse_min_event_ndim:3,is_generative_model:4,iter:2,ith:3,jacobian:3,joint:[2,3,4],joint_constraining_bijector:4,joint_param_distribut:4,jointdistributionnam:4,jointdistributionnamedautobatch:[2,3,4],jointmap:4,kera:3,kernel:2,keyword:1,kinet:5,kinetic_energy_fn:[3,5],kl_revers:3,kwarg:[1,3,4],larg:[2,3],larger:2,lead:2,leapfrog:[2,5],leapfrogintegr:[3,5],length:2,lift:3,like:2,likelihood:[4,5],linear:2,list:[2,3,4,5],local:3,locat:3,log:[2,3],log_accept_prob_getter_fn:2,logu:3,loss:3,loss_fn:3,make:2,make_dataset_from_df:5,make_energy_fn:3,make_optimizer_step_fn:3,make_scale_fn:3,make_shift_fn:3,make_stochastic_optimizer_step_fn:3,map:[2,4],margin:[3,4],markov:[0,1,2],match:2,mathemat:3,max_energy_diff:2,max_tree_depth:2,maximum:2,mcmc:[0,1],mean_field:3,merg:[2,3,4],merge_state_part:2,method:1,metric:2,mlp:3,model:[0,1,2,3,7],modul:[6,7],momentum:5,mont:[0,1],more:2,multipart:3,multipli:2,must:[2,3],name:[2,3,4,5],neg:3,neither:3,new_state_fn:2,node:2,non:3,none:[2,3,4,5],nor:3,normal:3,normalizingflow:3,note:[1,2,3,4,5],notimplementederror:[1,3],nouturnsampl:2,num_adaptation_step:2,num_burnin_step:2,num_chain:2,num_datapoint:1,num_integration_step:[3,5],num_leapfrog_step:2,num_result:2,num_sampl:[2,4],num_samples_to_approx_margin:3,num_step:3,number:[1,2,3,4,5],numpi:3,nut:2,nuts_kernel:2,object:[1,2,3,4,5],often:2,onto:4,optim:[2,3],optimizer_v2:3,option:5,order:4,ordereddict:[2,4,5],output:3,over:[2,3,4],packag:[6,7],page:6,panda:5,parallel:[2,4],parallel_iter:2,param:5,param_event_shap:4,param_nam:[4,5],param_sampl:4,paramet:[1,2,3,4,5],parameter:3,part:[2,4,5],particularli:[2,3],partit:3,pass:3,per:[2,5],perturb:2,phase:[2,5],pkr:2,posit:[1,2],possibl:[2,5],posterior:[2,3,4],posterior_distribut:4,posterior_lift_distribut:3,posterior_sampl:4,potenti:5,potential_energy_fn:[3,5],predict:4,prefix:2,primarili:4,prior:4,prior_distribut:4,probabilist:[1,3,4],process:2,produc:3,product:4,progress:[2,3],progress_bar:[2,3],proport:2,propos:2,provid:[1,2,3,4,5],python:[0,3],rais:[1,3],random_walk_normal_fn:2,randomwalkmetropoli:2,rang:4,rank:3,ratio:2,recal:3,regress:[1,2,3,4],reject:2,relat:[1,2],repres:2,requir:3,reshap:[3,4],reshape_flat_param_bijector:4,reshape_flat_unconstrained_param_bijector:4,reshape_sample_bijector:3,respect:4,restrict:3,result:[2,3],return_final_kernel_result:2,rhmc:2,riemannian:2,roughli:2,run:2,rwm_kernel:2,safe_discrepancy_fn:3,same:[2,3,5],sampl:[2,3,4],sample_chain:2,sample_result:[0,1],sample_s:3,sampleresult:2,scalar:3,scale:3,search:6,see:2,seed:2,select:5,self:3,semant:4,sens:4,set:2,shape:[2,3,4,5],shift:3,should:5,show:[2,3],shrinkage_target:2,simpl:3,simplestepsizeadapt:2,simplifi:2,singl:[2,3,5],size:[2,5],softwar:0,solv:5,some:2,space:[2,3,4,5],special:2,specifi:[2,5],split:[3,4],split_flat_param_bijector:4,split_flat_unconstrained_param_bijector:4,standard:2,start:2,state:[2,5],state_gradients_are_stop:2,statist:4,step:[2,3,5],step_count_smooth:2,step_siz:[2,3,5],step_size_adaptation_kernel:2,step_size_getter_fn:2,step_size_setter_fn:2,stepsiz:2,stepsize_adaptation_kernel:[0,1],stepsizeadaptationkernel:2,stochast:3,stochastic_fit:3,stop_gradi:2,str:[2,3,4,5],structur:3,subclass:[1,3],submodul:[0,7],subpackag:[2,3,4,7],sum:3,surrog:3,surrogate_posterior:[0,1],surrogateposterior:3,symmetr:2,symplect:5,symplectic_integr:[0,3,7],system:5,take:[2,3,4],target:[1,2,3,5],target_accept_prob:2,target_log_prob:[2,3],target_log_prob_fn:[2,3],target_nam:5,tensor:[2,3,4,5],tensorflow:3,tensorflow_prob:3,tensorshap:4,tfp:[2,3,4],than:3,them:3,thi:[2,3,4],those:4,threshold:2,through:2,to_ordered_dict:5,too:2,total:2,trace:2,trace_fn:2,trainabl:[2,3],trajectori:2,transform:[2,3,4,5],transforming_bijector:2,transit:2,transition_kernel:[0,1],transitionkernel:2,tree:2,tupl:3,type:[1,2,3,4,5],typeerror:3,unconstrain:[2,3,4],unconstrained_event_ndim:3,unconstrained_param_event_shap:4,uniformli:2,unnorm:[2,3],unrol:2,unrolled_leapfrog_step:2,use:[3,4],used:5,useful:[2,3],util:[0,2,3,4,7],validate_arg:[2,3],valu:[2,3],variabl:2,variat:[0,1,3],variou:[4,5],when:2,where:[2,3,5],whether:[2,3,4,5],which:[2,4,5],while_loop:2,wrap:2,wrapper:2},titles:["bayes_vi package","bayes_vi.inference package","bayes_vi.inference.mcmc package","bayes_vi.inference.vi package","bayes_vi.model package","bayes_vi.utils package","Welcome to bayes-vi\u2019s documentation!","bayes_vi"],titleterms:{bay:6,bayes_vi:[0,1,2,3,4,5,7],content:[0,1,2,3,4,5],dataset:5,document:6,flow_bijector:3,indic:6,infer:[1,2,3],mcmc:2,model:4,modul:[0,1,2,3,4,5],packag:[0,1,2,3,4,5],sample_result:2,stepsize_adaptation_kernel:2,submodul:[1,2,3,4,5],subpackag:[0,1],surrogate_posterior:3,symplectic_integr:5,tabl:6,transition_kernel:2,util:5,welcom:6}})