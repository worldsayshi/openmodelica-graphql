

const { spawn } = require('child_process');

const compile = (surceFileHandle) => {
  let process = spawn("echo", ["testing"]);
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
