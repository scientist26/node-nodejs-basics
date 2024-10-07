import { Worker, isMainThread, parentPort } from 'worker_threads';
import { fileURLToPath } from 'node:url';

// n should be received from main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

if (isMainThread) {
  const __filename = fileURLToPath(import.meta.url);
  const worker = new Worker(__filename);

  worker.postMessage(5);

  worker.on('message', (result) => {
    console.log('received from child thread result', result);
  });
  worker.on('error', (error) => {
    console.error('error from child thread', error);
  });
} else {
  const sendResult = () => {
    parentPort.on('message', (message) => {
      const result = nthFibonacci(message);
      parentPort.postMessage(result);
    });
  };

  sendResult();
}
