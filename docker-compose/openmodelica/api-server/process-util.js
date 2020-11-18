

const { spawn } = require('child_process');
const path = require("path");
const process = require('process');

/*
 $ omc +s modelname.mo
 $ make -f modelname.makefile
 */

const run = (...spawnargs) => {
  console.log("Spawning process: ", ...spawnargs);
  let cprocess = spawn(...spawnargs);

  cprocess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  cprocess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  cprocess.on('error', (code) => {
    console.log(`child process exited with error code ${code}`);
  });

  cprocess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  function stopChildProc(){
    cprocess.kill("SIGINT");
    process.exit(0);
    console.log("Stopping child process because parent process stopping.")
  }

  process.on('exit', stopChildProc);
  process.on('SIGINT', stopChildProc);
  return cprocess;
};

const compile = (filepath) => {
  run("bash", ["./compile_model.sh", filepath]);
};

const startModel = (filepath, opts) => {
  return run(filepath, ["-embeddedServer=opc-ua"], { cwd: opts.cwd });
};

module.exports = {compile, startModel};
