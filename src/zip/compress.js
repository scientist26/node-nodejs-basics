import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { unlink } from 'node:fs/promises';
import { promisify } from 'node:util';

const PATH_TO_FILE_TO_COMPRESS = 'src/zip/files/fileToCompress.txt';
const PATH_TO_FILE_TO_DECOMPRESS = 'src/zip/files/archive.gz';

const gzip = createGzip();

const pipelineAsync = promisify(pipeline);

const compress = async () => {
  try {
    await pipelineAsync(
      createReadStream(PATH_TO_FILE_TO_COMPRESS),
      gzip,
      createWriteStream(PATH_TO_FILE_TO_DECOMPRESS)
    );
    await unlink(PATH_TO_FILE_TO_COMPRESS);
  } catch (err) {
    console.error('An error occurred:', err);
  }
};

await compress();
