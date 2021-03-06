The simulation executable takes the following flags:

<-abortSlowSimulation>
  Aborts if the simulation chatters.
<-alarm=value> or <-alarm value>
  Aborts after the given number of seconds (default=0 disables the alarm).
<-clock=value> or <-clock value>
  Selects the type of clock to use. Valid options include:

  * RT (monotonic real-time clock)
  * CYC (cpu cycles measured with RDTSC)
  * CPU (process-based CPU-time)
<-cpu>
  Dumps the cpu-time into the result file using the variable named $cpuTime.
<-csvOstep=value> or <-csvOstep value>
  Value specifies csv-files for debug values for optimizer step.
<-cvodeNonlinearSolverIteration=value> or <-cvodeNonlinearSolverIteration value>
  Nonlinear solver iteration for CVODE solver. Default: Depends on flag cvodeLinearMultistepMethod. Valid values

  * CV_NEWTON      - Newton iteration.
                     Advised to use together with flag -cvodeLinearMultistepMethod=CV_BDF.
  * CV_FUNCTIONAL  - Functional iteration.
                     Advised to use together with flag -cvodeLinearMultistepMethod=CV_ADAMS.
<-cvodeLinearMultistepMethod=value> or <-cvodeLinearMultistepMethod value>
  Linear multistep method for CVODE solver. Default: CV_BDF. Valid values

  * CV_BDF    - BDF linear multistep method for stiff problems.
                Use together with flag -cvodeNonlinearSolverIteration=CV_NEWTON or don't set cvodeNonlinearSolverIteration.
  * CV_ADAMS  - Adams-Moulton linear multistep method for nonstiff problems.
                Use together with flag -cvodeNonlinearSolverIteration=CV_FUNCTIONAL or don't set cvodeNonlinearSolverIteration.
<-daeMode>
  Enables daeMode simulation if the model was compiled with the omc flag --daeMode and ida method is used.
<-deltaXLinearize=value> or <-deltaXLinearize value>
  Value specifies the delta x value for numerical differentiation used by linearization. The default value is sqrt(DBL_EPSILON*2e1).
<-deltaXSolver=value> or <-deltaXSolver value>
  Value specifies the delta x value for numerical differentiation used by integration method. The default values is sqrt(DBL_EPSILON).
<-embeddedServer=value> or <-embeddedServer value>
  Enables an embedded server. Valid values:

  * none - default, run without embedded server
  * opc-da - [broken] run with embedded OPC DA server (WIN32 only, uses proprietary OPC SC interface)
  * opc-ua - [experimental] run with embedded OPC UA server (TCP port 4841 for now; will have its own configuration option later)
  * filename - path to a shared object implementing the embedded server interface (requires access to internal OMC data-structures if you want to read or write data)
<-embeddedServerPort=value> or <-embeddedServerPort value>
  Value specifies the port number used by the embedded server. The default value is 4841.
<-mat_sync=value> or <-mat_sync value>
  Syncs the mat file header after emitting every N time-points.
<-emit_protected>
  Emits protected variables to the result-file.
<-eps=value> or <-eps value>
  Value specifies the number of convergence iteration to be performed for DataReconciliation
<-f=value> or <-f value>
  Value specifies a new setup XML file to the generated simulation code.

<-help=value> or <-help value>
  Get detailed information that specifies the command-line flag

  For example, -help=f prints detailed information for command-line flag f.
<-homAdaptBend=value> or <-homAdaptBend value>
  Maximum trajectory bending to accept the homotopy step.
  Default: 0.5, which means the corrector vector has to be smaller than half of the predictor vector.
<-homBacktraceStrategy=value> or <-homBacktraceStrategy value>
  Value specifies the backtrace strategy in the homotopy corrector step. Valid values:

  * fix - default, go back to the path by fixing one coordinate
  * orthogonal - go back to the path in an orthogonal direction to the tangent vector
<-homHEps=value> or <-homHEps value>
  Tolerance respecting residuals for the homotopy H-function (default: 1e-5).

  In the last step (lambda=1) newtonFTol is used as tolerance.
<-homMaxLambdaSteps=value> or <-homMaxLambdaSteps value>
  Maximum lambda steps allowed to run the homotopy path (default: system size * 100).
<-homMaxNewtonSteps=value> or <-homMaxNewtonSteps value>
  Maximum newton steps in the homotopy corrector step (default: 20).
<-homMaxTries=value> or <-homMaxTries value>
  Maximum number of tries for one homotopy lambda step (default: 10).
<-homNegStartDir>
  Start to run along the homotopy path in the negative direction.

  If one direction fails, the other direction is always used as fallback option.
<-homotopyOnFirstTry>
  If the model contains the homotopy operator, directly use the homotopy method to solve the initialization problem.
  Without this flag, the solver first tries to solve the initialization problem without homotopy and only uses homotopy as fallback option.
<-noHomotopyOnFirstTry>
  Disable the use of the homotopy method to solve the initialization problem.
  Without this flag, the solver tries to solve the initialization problem with homotopy if the model contains the homotopy-operator.
<-homTauDecFac=value> or <-homTauDecFac value>
  Decrease homotopy step size tau by this factor if tau is too big in the homotopy corrector step (default: 10.0).
<-homTauDecFacPredictor=value> or <-homTauDecFacPredictor value>
  Decrease homotopy step size tau by this factor if tau is too big in the homotopy predictor step (default: 2.0).
<-homTauIncFac=value> or <-homTauIncFac value>
  Increase homotopy step size tau by this factor if tau can be increased after the homotopy corrector step (default: 2.0).
<-homTauIncThreshold=value> or <-homTauIncThreshold value>
  Increase the homotopy step size tau if homAdaptBend/bend > homTauIncThreshold (default: 10).
<-homTauMax=value> or <-homTauMax value>
  Maximum homotopy step size tau for the homotopy process (default: 10).
<-homTauMin=value> or <-homTauMin value>
  Minimum homotopy step size tau for the homotopy process (default: 1e-4).
<-homTauStart=value> or <-homTauStart value>
  Homotopy step size tau at the beginning of the homotopy process (default: 0.2).
<-idaMaxErrorTestFails=value> or <-idaMaxErrorTestFails value>
  Value specifies the maximum number of error test failures in attempting one step. The default value is 7.
<-idaMaxNonLinIters=value> or <-idaMaxNonLinIters value>
  Value specifies the maximum number of nonlinear solver iterations at one step. The default value is 3.
<-idaMaxConvFails=value> or <-idaMaxConvFails value>
  Value specifies the maximum number of nonlinear solver convergence failures at one step. The default value is 10.
<-idaNonLinConvCoef=value> or <-idaNonLinConvCoef value>
  Value specifies the safety factor in the nonlinear convergence test. The default value is 0.33.
<-idaLS=value> or <-idaLS value>
  Value specifies the linear solver of the ida integration method. Valid values:


  * dense (ida internal dense method.)
  * klu (ida use sparse direct solver KLU. (default))
  * spgmr (ida generalized minimal residual method. Iterative method)
  * spbcg (ida Bi-CGStab. Iterative method)
  * sptfqmr (ida TFQMR. Iterative method)
<-idaScaling>
  Enable scaling of the IDA solver.
<-idaSensitivity>
  Enables sensitivity analysis with respect to parameters if the model is compiled with omc flag --calculateSensitivities.
<-ignoreHideResult>
  Emits also variables with HideResult=true annotation.
<-iif=value> or <-iif value>
  Value specifies an external file for the initialization of the model.
<-iim=value> or <-iim value>
  Value specifies the initialization method.
  Following options are available: 'symbolic' (default) and 'none'.

  * none (sets all variables to their start values and skips the initialization process)
  * symbolic (solves the initialization problem symbolically - default)
<-iit=value> or <-iit value>
  Value [Real] specifies a time for the initialization of the model.
<-ils=value> or <-ils value>
  Value specifies the number of steps for homotopy method (required: -iim=symbolic).
  The value is an Integer with default value 4.
<-impRKOrder=value> or <-impRKOrder value>
  Value specifies the integration order of the implicit Runge-Kutta method. Valid values: 1 to 6. Default order is 5.
<-impRKLS=value> or <-impRKLS value>
  Selects the linear solver of the integration methods impeuler, trapezoid and imprungekuta:

  * iterativ - default, sparse iterativ linear solver with fallback case to dense solver
  * dense - dense linear solver, SUNDIALS default method
<-initialStepSize=value> or <-initialStepSize value>
  Value specifies an initial step size, used by the methods: dassl, ida
<-csvInput=value> or <-csvInput value>
  Value specifies an csv-file with inputs for the simulation/optimization of the model
<-exInputFile=value> or <-exInputFile value>
  Value specifies an external file with inputs for the simulation/optimization of the model.
<-stateFile=value> or <-stateFile value>
  Value specifies an file with states start values for the optimization of the model.
<-inputPath=value> or <-inputPath value>
  Value specifies a path for reading the input files i.e., model_init.xml and model_info.json
<-ipopt_hesse=value> or <-ipopt_hesse value>
  Value specifies the hessematrix for Ipopt(OMC, BFGS, const).
<-ipopt_init=value> or <-ipopt_init value>
  Value specifies the initial guess for optimization (sim, const).
<-ipopt_jac=value> or <-ipopt_jac value>
  Value specifies the Jacobian for Ipopt(SYM, NUM, NUMDENSE).
<-ipopt_max_iter=value> or <-ipopt_max_iter value>
  Value specifies the max number of iteration for ipopt.
<-ipopt_warm_start=value> or <-ipopt_warm_start value>
  Value specifies lvl for a warm start in ipopt: 1,2,3,...
<-jacobian=value> or <-jacobian value>
  Select the calculation method for Jacobian used by the integration method:


  * coloredNumerical (Colored numerical Jacobian, which is default for dassl and ida. With option -idaLS=klu a sparse matrix is used.)
  * internalNumerical (Dense solver internal numerical Jacobian.)
  * coloredSymbolical (Colored symbolical Jacobian. Needs omc compiler flag --generateSymbolicJacobian. With option -idaLS=klu a sparse matrix is used.)
  * numerical (Dense numerical Jacobian.)
  * symbolical (Dense symbolical Jacobian. Needs omc compiler flag --generateSymbolicJacobian.)
<-jacobianThreads=value> or <-jacobianThreads value>
  Value specifies the number of threads for jacobian evaluation in dassl or ida.  The value is an Integer with default value 1.
<-l=value> or <-l value>
  Value specifies a time where the linearization of the model should be performed.
<-l_datarec>
  Emit data recovery matrices with model linearization.
<-logFormat=value> or <-logFormat value>
  Value specifies the log format of the executable:

  * text (default)
  * xml
  * xmltcp (required -port flag)
<-ls=value> or <-ls value>
  Value specifies the linear solver method

  * lapack (method using LAPACK LU factorization)
  * lis (method using iterative solver Lis)
  * klu (method using KLU sparse linear solver)
  * umfpack (method using UMFPACK sparse linear solver)
  * totalpivot (method using a total pivoting LU factorization for underdetermination systems)
  * default (default method - LAPACK with total pivoting as fallback)
<-ls_ipopt=value> or <-ls_ipopt value>
  Value specifies the linear solver method for Ipopt, default mumps.
  Note: Use if you build ipopt with other linear solver like ma27
<-lss=value> or <-lss value>
  Value specifies the linear sparse solver method

  * default (the default sparse linear solver (or a dense solver if there is none available) )
  * lis (method using iterative solver Lis)
  * klu (method using klu sparse linear solver)
  * umfpack (method using umfpack sparse linear solver)
<-lssMaxDensity=value> or <-lssMaxDensity value>
  Value specifies the maximum density for using a linear sparse solver.
  The value is a Double with default value 0.2.
<-lssMinSize=value> or <-lssMinSize value>
  Value specifies the minimum system size for using a linear sparse solver.
  The value is an Integer with default value 4001.
<-lv=value> or <-lv value>
  Value (a comma-separated String list) specifies which logging levels to
  enable. Multiple options can be enabled at the same time.

  * stdout (this stream is always active, can be disabled with -lv=-stdout)
  * assert (this stream is always active, can be disabled with -lv=-assert)
  * LOG_DASSL (additional information about dassl solver)
  * LOG_DASSL_STATES (outputs the states at every dassl call)
  * LOG_DEBUG (additional debug information)
  * LOG_DSS (outputs information about dynamic state selection)
  * LOG_DSS_JAC (outputs jacobian of the dynamic state selection)
  * LOG_DT (additional information about dynamic tearing)
  * LOG_DT_CONS (additional information about dynamic tearing (local and global constraints))
  * LOG_EVENTS (additional information during event iteration)
  * LOG_EVENTS_V (verbose logging of event system)
  * LOG_INIT (additional information during initialization)
  * LOG_INIT_HOMOTOPY (filter for LOG_INIT to log only homotopy initialization)
  * LOG_INIT_V (verbose information during initialziation)
  * LOG_IPOPT (information from Ipopt)
  * LOG_IPOPT_FULL (more information from Ipopt)
  * LOG_IPOPT_JAC (check jacobian matrix with Ipopt)
  * LOG_IPOPT_HESSE (check hessian matrix with Ipopt)
  * LOG_IPOPT_ERROR (print max error in the optimization)
  * LOG_JAC (outputs the jacobian matrix used by dassl)
  * LOG_LS (logging for linear systems)
  * LOG_LS_V (verbose logging of linear systems)
  * LOG_NLS (logging for nonlinear systems)
  * LOG_NLS_V (verbose logging of nonlinear systems)
  * LOG_NLS_HOMOTOPY (logging of homotopy solver for nonlinear systems)
  * LOG_NLS_JAC (outputs the jacobian of nonlinear systems)
  * LOG_NLS_JAC_TEST (tests the analytical jacobian of nonlinear systems)
  * LOG_NLS_RES (outputs every evaluation of the residual function)
  * LOG_NLS_EXTRAPOLATE (outputs debug information about extrapolate process)
  * LOG_RES_INIT (outputs residuals of the initialization)
  * LOG_RT (additional information regarding real-time processes)
  * LOG_SIMULATION (additional information about simulation process)
  * LOG_SOLVER (additional information about solver process)
  * LOG_SOLVER_V (verbose information about the integration process)
  * LOG_SOLVER_CONTEXT (context information during the solver process)
  * LOG_SOTI (final solution of the initialization)
  * LOG_STATS (additional statistics about timer/events/solver)
  * LOG_STATS_V (additional statistics for LOG_STATS)
  * LOG_SUCCESS (this stream is always active, unless deactivated with -lv=-LOG_SUCCESS)
  * LOG_UTIL (???)
  * LOG_ZEROCROSSINGS (additional information about the zerocrossings)
<-lv_time=value> or <-lv_time value>
  Interval (a comma-separated Double list with two elements) specifies in which
  time interval logging is active. Doesn't affect LOG_STDOUT, LOG_ASSERT, and
  LOG_SUCCESS, LOG_STATS, LOG_STATS_V.
<-mbi=value> or <-mbi value>
  Value specifies the maximum number of bisection iterations for state event
  detection or zero for default behavior
<-mei=value> or <-mei value>
  Value specifies the maximum number of event iterations.
  The value is an Integer with default value 20.
<-maxIntegrationOrder=value> or <-maxIntegrationOrder value>
  Value specifies maximum integration order, used by the methods: dassl, ida.
<-maxStepSize=value> or <-maxStepSize value>
  Value specifies maximum absolute step size, used by the methods: dassl, ida.
<-measureTimePlotFormat=value> or <-measureTimePlotFormat value>
  Value specifies the output format of the measure time functionality:

  * svg
  * jpg
  * ps
  * gif
  * ...
<-newtonFTol=value> or <-newtonFTol value>
  Tolerance respecting residuals for updating solution vector in Newton solver.
  Solution is accepted if the (scaled) 2-norm of the residuals is smaller than the tolerance newtonFTol and the (scaled) newton correction (delta_x) is smaller than the tolerance newtonXTol.
  The value is a Double with default value 1e-12.
<-newtonMaxStepFactor=value> or <-newtonMaxStepFactor value>
  Maximum newton step factor mxnewtstep = maxStepFactor * norm2(xScaling).  Used currently only by KINSOL.
<-newtonXTol=value> or <-newtonXTol value>
  Tolerance respecting newton correction (delta_x) for updating solution vector in Newton solver.
  Solution is accepted if the (scaled) 2-norm of the residuals is smaller than the tolerance newtonFTol and the (scaled) newton correction (delta_x) is smaller than the tolerance newtonXTol.
  The value is a Double with default value 1e-12.
<-newton=value> or <-newton value>
  Value specifies the damping strategy for the newton solver.

  * damped (Newton with a damping strategy)
  * damped2 (Newton with a damping strategy 2)
  * damped_ls (Newton with a damping line search)
  * damped_bt (Newton with a damping backtracking and a minimum search via golden ratio method)
  * pure (Newton without damping strategy)
<-nls=value> or <-nls value>
  Value specifies the nonlinear solver:

  * hybrid (Modification of the Powell hybrid method from minpack - former default solver)
  * kinsol (SUNDIALS/KINSOL includes an interface to the sparse direct solver, KLU. See simulation option -nlsLS for more information.)
  * newton (Newton Raphson - prototype implementation)
  * mixed (Mixed strategy. First the homotopy solver is tried and then as fallback the hybrid solver.)
  * homotopy (Damped Newton solver if failing case fixed-point and Newton homotopies are tried.)
<-nlsInfo>
  Outputs detailed information about solving process of non-linear systems into csv files.
<-nlsLS=value> or <-nlsLS value>
  Value specifies the linear solver used by the non-linear solver:

  * default (chooses the nls linear solver based on which nls is being used.)
  * totalpivot (internal total pivot implementation. Solve in some case even under-determined systems.)
  * lapack (use external LAPACK implementation.)
  * klu (use KLU direct sparse solver. Only with KINSOL available.)
<-nlssMaxDensity=value> or <-nlssMaxDensity value>
  Value specifies the maximum density for using a non-linear sparse solver.
  The value is a Double with default value 0.2.
<-nlssMinSize=value> or <-nlssMinSize value>
  Value specifies the minimum system size for using a non-linear sparse solver.
  The value is an Integer with default value 10001.
<-noemit>
  Do not emit any results to the result file.
<-noEquidistantTimeGrid>
  Output the internal steps given by dassl/ida instead of interpolating results
  into an equidistant time grid as given by stepSize or numberOfIntervals.
<-noEquidistantOutputFrequency=value> or <-noEquidistantOutputFrequency value>
  Integer value n controls the output frequency in noEquidistantTimeGrid mode
  and outputs every n-th time step
<-noEquidistantOutputTime=value> or <-noEquidistantOutputTime value>
  Real value timeValue controls the output time point in noEquidistantOutputTime
  mode and outputs every time>=k*timeValue, where k is an integer
<-noEventEmit>
  Do not emit event points to the result file.
<-noRestart>
  Disables the restart of the integration method after an event is performed, used by the methods: dassl, ida
<-noRootFinding>
  Disables the internal root finding procedure of methods: dassl and ida.
<-noScaling>
  Disables scaling for the variables and the residuals in the algebraic nonlinear solver KINSOL.
<-noSuppressAlg>
  Flag to not suppress algebraic variables in the local error test of the ida solver in daeMode.
  In general, the use of this option is discouraged when solving DAE systems of index 1,
  whereas it is generally encouraged for systems of index 2 or more.
<-optDebugJac=value> or <-optDebugJac value>
  Value specifies the number of iterations from the dynamic optimization, which
  will be debugged, creating .csv and .py files.
<-optimizerNP=value> or <-optimizerNP value>
  Value specifies the number of points in a subinterval.
  Currently supports numbers 1 and 3.
<-optimizerTimeGrid=value> or <-optimizerTimeGrid value>
  Value specifies external file with time points.
<-output=value> or <-output value>
  Output the variables a, b and c at the end of the simulation to the standard
  output: time = value, a = value, b = value, c = value
<-outputPath=value> or <-outputPath value>
  Value specifies a path for writing the output files i.e., model_res.mat, model_prof.intdata, model_prof.realdata etc.
<-override=value> or <-override value>
  Override the variables or the simulation settings in the XML setup file
  For example: var1=start1,var2=start2,par3=start3,startTime=val1,stopTime=val2
<-overrideFile=value> or <-overrideFile value>
  Will override the variables or the simulation settings in the XML setup file
  with the values from the file.
  Note that: -overrideFile CANNOT be used with -override.
  Use when variables for -override are too many.
  overrideFileName contains lines of the form: var1=start1
<-port=value> or <-port value>
  Value specifies the port for simulation status (default disabled).
<-r=value> or <-r value>
  Value specifies the name of the output result file.
  The default file-name is based on the model name and output format.
  For example: Model_res.mat.
<-reconcile>
  Run the DataReconciliation algorithm for constrained equation
<-rt=value> or <-rt value>
  Value specifies the scaling factor for real-time synchronization (0 disables).
  A value > 1 means the simulation takes a longer time to simulate.

<-s=value> or <-s value>
  Value specifies the integration method. For additional information see the :ref:`User's Guide <cruntime-integration-methods>`

  * euler - Euler - explicit, fixed step size, order 1
  * heun - Heun's method - explicit, fixed step, order 2
  * rungekutta - classical Runge-Kutta - explicit, fixed step, order 4
  * impeuler - Euler - implicit, fixed step size, order 1
  * trapezoid - trapezoidal rule - implicit, fixed step size, order 2
  * imprungekutta - Runge-Kutta methods based on Radau and Lobatto IIA - implicit, fixed step size, order 1-6(selected manually by flag -impRKOrder)
  * irksco - own developed Runge-Kutta solver - implicit, step size control, order 1-2
  * dassl - default solver - BDF method - implicit, step size control, order 1-5
  * ida - SUNDIALS IDA solver - BDF method with sparse linear solver - implicit, step size control, order 1-5
  * cvode - experimental implementation of SUNDIALS CVODE solver - BDF or Adams-Moulton method - step size control, order 1-12
  * rungekuttaSsc - Runge-Kutta based on Novikov (2016) - explicit, step size control, order 4-5 [experimental]
  * symSolver - symbolic inline Solver [compiler flag +symSolver needed] - fixed step size, order 1
  * symSolverSsc - symbolic implicit Euler with step size control [compiler flag +symSolver needed] - step size control, order 1
  * qss - A QSS solver [experimental]
  * optimization - Special solver for dynamic optimization
<-single>
  Output results in single precision (mat-format only).
<-steps>
  Dumps the number of integration steps into the result file.
<-steadyState>
  Aborts the simulation if steady state is reached.
<-steadyStateTol=value> or <-steadyStateTol value>
  This relative tolerance is used to detect steady state: max(|d(x_i)/dt|/nominal(x_i)) < steadyStateTol
<-sx=value> or <-sx value>
  Value specifies an csv-file with inputs as covariance matrix Sx for DataReconciliation
<-keepHessian=value> or <-keepHessian value>
  Value specifies the number of steps, which keep Hessian matrix constant.
<-w>
  Shows all warnings even if a related log-stream is inactive.
