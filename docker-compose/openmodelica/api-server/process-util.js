

const { spawn } = require('child_process');
const path = require("path");
const process = require('process');

/*
 $ omc +s modelname.mo
 $ make -f modelname.makefile
 */

const run = (...spawnargs) => {
  let cprocess = spawn(...spawnargs);

  cprocess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  cprocess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  cprocess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  function stopChildProc(){
    cprocess.kill("SIGINT");
    process.exit(0);
  }

  process.on('exit', stopChildProc);
  process.on('SIGINT', stopChildProc);

  return cprocess;
};

const compile = (filepath) => {
  run("./compile_model.sh", [filepath]);
};

const startModel = (filepath) => {
  return run(filepath);
};

module.exports = {compile, startModel};
