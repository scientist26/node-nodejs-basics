import { readFile } from 'node:fs/promises';

const PATH_TO_FILE_TO_REMOVE = 'src/fs/files/fileToRead.txt';

const ERROR_MESSAGE = 'FS operation failed';
const ERROR_NO_ENTITY_CODE = 'ENOENT';

const read = async () => {
  try {
    const fileContent = await readFile(PATH_TO_FILE_TO_REMOVE, 'utf8');
    console.log(fileContent);
  } catch (error) {
    if (error.code === ERROR_NO_ENTITY_CODE) {
      throw new Error(ERROR_MESSAGE);
    }
  }
};

await read();
