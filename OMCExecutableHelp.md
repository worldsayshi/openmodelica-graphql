stdout            | warning | invalid command line option: -h
stdout            | info    | usage: C:\Users\perfr\AppData\Local\Temp\OpenModelica\BouncingBall.exe
|                 | |       | | <-abortSlowSimulation>
|                 | |       | |   aborts if the simulation chatters
|                 | |       | | <-alarm=value> or <-alarm value>
|                 | |       | |   aborts after the given number of seconds (0 disables)
|                 | |       | | <-clock=value> or <-clock value>
|                 | |       | |   selects the type of clock to use -clock=RT, -clock=CYC or -clock=CPU
|                 | |       | | <-cpu>
|                 | |       | |   dumps the cpu-time into the result file
|                 | |       | | <-csvOstep=value> or <-csvOstep value>
|                 | |       | |   value specifies csv-files for debug values for optimizer step
|                 | |       | | <-cvodeNonlinearSolverIteration=value> or <-cvodeNonlinearSolverIteration value>
|                 | |       | |   nonlinear solver iteration for CVODE solver
|                 | |       | | <-cvodeLinearMultistepMethod=value> or <-cvodeLinearMultistepMethod value>
|                 | |       | |   linear multistep method for CVODE solver
|                 | |       | | <-daeMode>
|                 | |       | |   flag to let the integrator use daeResiduals
|                 | |       | | <-deltaXLinearize=value> or <-deltaXLinearize value>
|                 | |       | |   value specifies the delta x value for numerical differentiation used by linearization. The default value is 1e-5.
|                 | |       | | <-deltaXSolver=value> or <-deltaXSolver value>
|                 | |       | |   value specifies the delta x value for numerical differentiation used by integrator. The default values is sqrt(DBL_EPSILON).
|                 | |       | | <-embeddedServer=value> or <-embeddedServer value>
|                 | |       | |   enables an embedded server. Valid values: none, opc-da [broken], opc-ua [experimental], or the path to a shared object.
|                 | |       | | <-embeddedServerPort=value> or <-embeddedServerPort value>
|                 | |       | |   [int (default 4841)] value specifies the port number used by the embedded server
|                 | |       | | <-mat_sync=value> or <-mat_sync value>
|                 | |       | |   [int (default 0)] syncs the mat file header after emitting every N time-points (default disabled)
|                 | |       | | <-emit_protected>
|                 | |       | |   emits protected variables to the result-file
|                 | |       | | <-eps=value> or <-eps value>
|                 | |       | |   value specifies the number of convergence iteration to be performed for DataReconciliation
|                 | |       | | <-f=value> or <-f value>
|                 | |       | |   value specifies a new setup XML file to the generated simulation code
|                 | |       | | <-help=value> or <-help value>
|                 | |       | |   get detailed information that specifies the command-line flag
|                 | |       | | <-homAdaptBend=value> or <-homAdaptBend value>
|                 | |       | |   [double (default 0.5)] maximum trajectory bending to accept the homotopy step
|                 | |       | | <-homBacktraceStrategy=value> or <-homBacktraceStrategy value>
|                 | |       | |   value specifies the backtrace strategy in the homotopy corrector step (fix (default), orthogonal)
|                 | |       | | <-homHEps=value> or <-homHEps value>
|                 | |       | |   [double (default 1e-5)] tolerance respecting residuals for the homotopy H-function
|                 | |       | | <-homMaxLambdaSteps=value> or <-homMaxLambdaSteps value>
|                 | |       | |   [int (default size dependent)] maximum lambda steps allowed to run the homotopy path
|                 | |       | | <-homMaxNewtonSteps=value> or <-homMaxNewtonSteps value>
|                 | |       | |   [int (default 20)] maximum newton steps in the homotopy corrector step
|                 | |       | | <-homMaxTries=value> or <-homMaxTries value>
|                 | |       | |   [int (default 10)] maximum number of tries for one homotopy lambda step
|                 | |       | | <-homNegStartDir>
|                 | |       | |   start to run along the homotopy path in the negative direction
|                 | |       | | <-homotopyOnFirstTry>
|                 | |       | |   directly use the homotopy method to solve the initialization problem
|                 | |       | | <-noHomotopyOnFirstTry>
|                 | |       | |   disable the use of the homotopy method to solve the initialization problem
|                 | |       | | <-homTauDecFac=value> or <-homTauDecFac value>
|                 | |       | |   [double (default 10.0)] decrease homotopy step size tau by this factor if tau is too big in the homotopy corrector step
|                 | |       | | <-homTauDecFacPredictor=value> or <-homTauDecFacPredictor value>
|                 | |       | |   [double (default 2.0)] decrease homotopy step size tau by this factor if tau is too big in the homotopy predictor step
|                 | |       | | <-homTauIncFac=value> or <-homTauIncFac value>
|                 | |       | |   [double (default 2.0)] increase homotopy step size tau by this factor if tau is too small in the homotopy corrector step
|                 | |       | | <-homTauIncThreshold=value> or <-homTauIncThreshold value>
|                 | |       | |   [double (default 10.0)] increase the homotopy step size tau if bend < homAdaptBend/homTauIncThreshold
|                 | |       | | <-homTauMax=value> or <-homTauMax value>
|                 | |       | |   [double (default 10.0)] maximum homotopy step size tau for the homotopy process
|                 | |       | | <-homTauMin=value> or <-homTauMin value>
|                 | |       | |   [double (default 1e-4)] minimum homotopy step size tau for the homotopy process
|                 | |       | | <-homTauStart=value> or <-homTauStart value>
|                 | |       | |   [double (default 0.2)] homotopy step size tau at the beginning of the homotopy process
|                 | |       | | <-idaMaxErrorTestFails=value> or <-idaMaxErrorTestFails value>
|                 | |       | |   value specifies the maximum number of error test failures in attempting one step. The default value is 7.
|                 | |       | | <-idaMaxNonLinIters=value> or <-idaMaxNonLinIters value>
|                 | |       | |   value specifies the maximum number of nonlinear solver iterations at one step. The default value is 3.
|                 | |       | | <-idaMaxConvFails=value> or <-idaMaxConvFails value>
|                 | |       | |   value specifies the maximum number of nonlinear solver convergence failures at one step. The default value is 10.
|                 | |       | | <-idaNonLinConvCoef=value> or <-idaNonLinConvCoef value>
|                 | |       | |   value specifies the safety factor in the nonlinear convergence test. The default value is 0.33.
|                 | |       | | <-idaLS=value> or <-idaLS value>
|                 | |       | |   select the linear solver used by ida
|                 | |       | | <-idaScaling>
|                 | |       | |   enable scaling of the IDA solver
|                 | |       | | <-idaSensitivity>
|                 | |       | |   flag to add sensitivity information to the result files
|                 | |       | | <-ignoreHideResult>
|                 | |       | |   ignore HideResult=true annotation
|                 | |       | | <-iif=value> or <-iif value>
|                 | |       | |   value specifies an external file for the initialization of the model relative to -inputPath
|                 | |       | | <-iim=value> or <-iim value>
|                 | |       | |   value specifies the initialization method
|                 | |       | | <-iit=value> or <-iit value>
|                 | |       | |   [double] value specifies a time for the initialization of the model
|                 | |       | | <-ils=value> or <-ils value>
|                 | |       | |   [int (default 4)] number of lambda steps for homotopy methods
|                 | |       | | <-impRKOrder=value> or <-impRKOrder value>
|                 | |       | |   [int (default 5)] value specifies the integration order of the implicit Runge-Kutta method. Valid values: 1-6
|                 | |       | | <-impRKLS=value> or <-impRKLS value>
|                 | |       | |   selects the linear solver of the integration methods: impeuler, trapezoid and imprungekuta
|                 | |       | | <-initialStepSize=value> or <-initialStepSize value>
|                 | |       | |   value specifies an initial step size for supported solver
|                 | |       | | <-csvInput=value> or <-csvInput value>
|                 | |       | |   value specifies an csv-file with inputs for the simulation/optimization of the model
|                 | |       | | <-exInputFile=value> or <-exInputFile value>
|                 | |       | |   value specifies an external file with inputs for the simulation/optimization of the model
|                 | |       | | <-stateFile=value> or <-stateFile value>
|                 | |       | |   value specifies an file with states start values for the optimization of the model
|                 | |       | | <-inputPath=value> or <-inputPath value>
|                 | |       | |   value specifies a path for reading the input files i.e., model_init.xml and model_info.json
|                 | |       | | <-ipopt_hesse=value> or <-ipopt_hesse value>
|                 | |       | |   value specifies the hessian for Ipopt
|                 | |       | | <-ipopt_init=value> or <-ipopt_init value>
|                 | |       | |   value specifies the initial guess for optimization
|                 | |       | | <-ipopt_jac=value> or <-ipopt_jac value>
|                 | |       | |   value specifies the Jacobian for Ipopt
|                 | |       | | <-ipopt_max_iter=value> or <-ipopt_max_iter value>
|                 | |       | |   value specifies the max number of iteration for ipopt
|                 | |       | | <-ipopt_warm_start=value> or <-ipopt_warm_start value>
|                 | |       | |   value specifies lvl for a warm start in ipopt: 1,2,3,...
|                 | |       | | <-jacobian=value> or <-jacobian value>
|                 | |       | |   select the calculation method of the Jacobian used only by ida and dassl solver.
|                 | |       | | <-jacobianThreads=value> or <-jacobianThreads value>
|                 | |       | |   [int default: 1] value specifies the number of threads for jacobian evaluation in dassl or ida.
|                 | |       | | <-l=value> or <-l value>
|                 | |       | |   value specifies a time where the linearization of the model should be performed
|                 | |       | | <-l_datarec>
|                 | |       | |   emit data recovery matrices with model linearization
|                 | |       | | <-logFormat=value> or <-logFormat value>
|                 | |       | |   value specifies the log format of the executable. -logFormat=text (default), -logFormat=xml or -logFormat=xmltcp
|                 | |       | | <-ls=value> or <-ls value>
|                 | |       | |   value specifies the linear solver method (default: lapack, totalpivot (fallback))
|                 | |       | | <-ls_ipopt=value> or <-ls_ipopt value>
|                 | |       | |   value specifies the linear solver method for ipopt
|                 | |       | | <-lss=value> or <-lss value>
|                 | |       | |   value specifies the linear sparse solver method (default: umfpack)
|                 | |       | | <-lssMaxDensity=value> or <-lssMaxDensity value>
|                 | |       | |   [double (default 0.2)] value specifies the maximum density for using a linear sparse solver
|                 | |       | | <-lssMinSize=value> or <-lssMinSize value>
|                 | |       | |   [int (default 201)] value specifies the minimum system size for using a linear sparse solver
|                 | |       | | <-lv=value> or <-lv value>
|                 | |       | |   [string list] value specifies the logging level
|                 | |       | | <-lv_time=value> or <-lv_time value>
|                 | |       | |   [double list] specifying time interval to allow loging in
|                 | |       | | <-mbi=value> or <-mbi value>
|                 | |       | |   [int (default 0)] value specifies the maximum number of bisection iterations for state event detection or zero for default behavior
|                 | |       | | <-mei=value> or <-mei value>
|                 | |       | |   [int (default 20)] value specifies the maximum number of event iterations
|                 | |       | | <-maxIntegrationOrder=value> or <-maxIntegrationOrder value>
|                 | |       | |   value specifies maximum integration order for supported solver
|                 | |       | | <-maxStepSize=value> or <-maxStepSize value>
|                 | |       | |   value specifies maximum absolute step size for supported solver
|                 | |       | | <-measureTimePlotFormat=value> or <-measureTimePlotFormat value>
|                 | |       | |   value specifies the output format of the measure time functionality
|                 | |       | | <-newtonFTol=value> or <-newtonFTol value>
|                 | |       | |   [double (default 1e-12)] tolerance respecting residuals for updating solution vector in Newton solver
|                 | |       | | <-newtonMaxStepFactor=value> or <-newtonMaxStepFactor value>
|                 | |       | |   [double (default 1e12)] maximum newton step factor mxnewtstep = maxStepFactor * norm2(xScaling). Used currently only by KINSOL.
|                 | |       | | <-newtonXTol=value> or <-newtonXTol value>
|                 | |       | |   [double (default 1e-12)] tolerance respecting newton correction (delta_x) for updating solution vector in Newton solver
|                 | |       | | <-newton=value> or <-newton value>
|                 | |       | |   value specifies the damping strategy for the newton solver
|                 | |       | | <-nls=value> or <-nls value>
|                 | |       | |   value specifies the nonlinear solver
|                 | |       | | <-nlsInfo>
|                 | |       | |   outputs detailed information about solving process of non-linear systems into csv files.
|                 | |       | | <-nlsLS=value> or <-nlsLS value>
|                 | |       | |   value specifies the linear solver used by the non-linear solver
|                 | |       | | <-nlssMaxDensity=value> or <-nlssMaxDensity value>
|                 | |       | |   [double (default 0.2)] value specifies the maximum density for using a non-linear sparse solver
|                 | |       | | <-nlssMinSize=value> or <-nlssMinSize value>
|                 | |       | |   [int (default 10001)] value specifies the minimum system size for using a non-linear sparse solver
|                 | |       | | <-noemit>
|                 | |       | |   do not emit any results to the result file
|                 | |       | | <-noEquidistantTimeGrid>
|                 | |       | |   stores results not in equidistant time grid as given by stepSize or numberOfIntervals, instead the variable step size of dassl or ida integrator.
|                 | |       | | <-noEquidistantOutputFrequency=value> or <-noEquidistantOutputFrequency value>
|                 | |       | |   value controls the output frequency in noEquidistantTimeGrid mode
|                 | |       | | <-noEquidistantOutputTime=value> or <-noEquidistantOutputTime value>
|                 | |       | |   value controls the output time point in noEquidistantOutputTime mode
|                 | |       | | <-noEventEmit>
|                 | |       | |   do not emit event points to the result file
|                 | |       | | <-noRestart>
|                 | |       | |   disables the restart of the integration method after an event is performed, used by the methods: dassl, ida
|                 | |       | | <-noRootFinding>
|                 | |       | |   disables the internal root finding procedure of methods: dassl and ida.
|                 | |       | | <-noScaling>
|                 | |       | |   disables scaling for the variables and the residuals in the algebraic nonlinear solver KINSOL.
|                 | |       | | <-noSuppressAlg>
|                 | |       | |   flag to not suppress algebraic variables in the local error test of ida solver in daeMode
|                 | |       | | <-optDebugJac=value> or <-optDebugJac value>
|                 | |       | |   value specifies the number of iter from the dyn. optimization, which will be debug, creating *csv and *py file
|                 | |       | | <-optimizerNP=value> or <-optimizerNP value>
|                 | |       | |   value specifies the number of points in a subinterval
|                 | |       | | <-optimizerTimeGrid=value> or <-optimizerTimeGrid value>
|                 | |       | |   value specifies external file with time points.
|                 | |       | | <-output=value> or <-output value>
|                 | |       | |   output the variables a, b and c at the end of the simulation to the standard output
|                 | |       | | <-outputPath=value> or <-outputPath value>
|                 | |       | |   value specifies a path for writing the output files i.e., model_res.mat, model_prof.intdata, model_prof.realdata etc.
|                 | |       | | <-override=value> or <-override value>
|                 | |       | |   override the variables or the simulation settings in the XML setup file
|                 | |       | | <-overrideFile=value> or <-overrideFile value>
|                 | |       | |   will override the variables or the simulation settings in the XML setup file with the values from the file
|                 | |       | | <-port=value> or <-port value>
|                 | |       | |   value specifies the port for simulation status (default disabled)
|                 | |       | | <-r=value> or <-r value>
|                 | |       | |   value specifies a new result file than the default Model_res.mat
|                 | |       | | <-reconcile>
|                 | |       | |   Run the DataReconciliation algorithm for constrained equation
|                 | |       | | <-rt=value> or <-rt value>
|                 | |       | |   value specifies the scaling factor for real-time synchronization (0 disables)
|                 | |       | | <-s=value> or <-s value>
|                 | |       | |   value specifies the integration method
|                 | |       | | <-single>
|                 | |       | |   output in single precision
|                 | |       | | <-steps>
|                 | |       | |   dumps the number of integration steps into the result file
|                 | |       | | <-steadyState>
|                 | |       | |   aborts if steady state is reached
|                 | |       | | <-steadyStateTol=value> or <-steadyStateTol value>
|                 | |       | |   [double (default 1e-3)] This relative tolerance is used to detect steady state.
|                 | |       | | <-sx=value> or <-sx value>
|                 | |       | |   value specifies a csv-file with inputs as covariance matrix Sx for DataReconciliation
|                 | |       | | <-keepHessian=value> or <-keepHessian value>
|                 | |       | |   value specifies the number of steps, which keep hessian matrix constant
|                 | |       | | <-w>
|                 | |       | |   shows all warnings even if a related log-stream is inactive
