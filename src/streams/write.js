import fs from 'node:fs';

const readableFromTerminalStream = process.stdin;
const writableToFileStream = fs.createWriteStream('src/streams/files/fileToWrite.txt');

const write = async () => {
  readableFromTerminalStream.pipe(writableToFileStream);
  readableFromTerminalStream.resume();
  //   readableFromTerminalStream.on('data', (chunk) => {
  //     // close stream if input is an empty
  //     if (chunk.toString().length === 1) {
  //       readableFromTerminalStream.unpipe(writableToFileStream);
  //     }
  //   });
};

await write();
