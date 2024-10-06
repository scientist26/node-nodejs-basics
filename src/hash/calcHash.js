import crypto from 'crypto';
import fs from 'fs';

const fileToCalculateHashForStream = fs.createReadStream('src/hash/files/fileToCalculateHashFor.txt');
const writableToTerminalStream = process.stdout;

const calculateHash = async () => {
  const hash = crypto.createHash('sha256');
  fileToCalculateHashForStream.pipe(hash).setEncoding('hex');

  hash.on('finish', () => {
    writableToTerminalStream.write(hash.read() + '\n');
  });
};

await calculateHash();
