

const { spawn } = require('child_process');
const path = require("path");

/*
 $ omc +s modelname.mo
 $ make -f modelname.makefile
 */

const compile = (filepath) => {
  let process = spawn("./compile_model.sh", [filepath]);

  process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  process.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  process.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

module.exports = {compile};
