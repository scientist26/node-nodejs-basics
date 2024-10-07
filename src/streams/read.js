import fs from 'node:fs';

const readableFromFileStream = fs.createReadStream('src/streams/files/fileToRead.txt');
const writableToTerminalStream = process.stdout;

const read = async () => {
  readableFromFileStream.pipe(writableToTerminalStream);
};

await read();
