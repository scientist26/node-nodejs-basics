import { Transform, pipeline } from 'stream';

const readableFromTerminalStream = process.stdin;
const writableToTerminalStream = process.stdout;

const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      const reversedText = chunk.toString().trim().split('').reverse().join('');
      callback(null, reversedText + '\n');
    },
  });
  //   readableFromTerminalStream.pipe(reverseText).pipe(writableToTerminalStream);
  pipeline(readableFromTerminalStream, reverseText, writableToTerminalStream, (err) => {
    console.error('Pipeline failed.', err);
  });
};

await transform();
