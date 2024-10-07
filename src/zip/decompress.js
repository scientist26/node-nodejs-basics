import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { unlink } from 'node:fs/promises';
import { promisify } from 'node:util';

const PATH_TO_COMPRESSED_FILE = 'src/zip/files/archive.gz';
const PATH_TO_FILE_TO_DECOMPRESS = 'src/zip/files/fileToCompress.txt';

const gunzip = createGunzip();

const pipelineAsync = promisify(pipeline);

const decompress = async () => {
  try {
    await pipelineAsync(
      createReadStream(PATH_TO_COMPRESSED_FILE),
      gunzip,
      createWriteStream(PATH_TO_FILE_TO_DECOMPRESS)
    );
    await unlink(PATH_TO_COMPRESSED_FILE);
  } catch (err) {
    console.error('An error occurred:', err);
  }
};

await decompress();
