import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', ['src/cp/files/script.js', ...args]);

  process.stdin.pipe(childProcess.stdin);
  //   childProcess.stdout.on('data', (data) => console.log(data.toString()));
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess([1, 2, 3]);
