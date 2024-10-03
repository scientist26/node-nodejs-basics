import { readdir } from 'node:fs/promises';

const PATH_TO_FILE_TO_REMOVE = 'src/fs/files';

const ERROR_MESSAGE = 'FS operation failed';
const ERROR_NO_ENTITY_CODE = 'ENOENT';

const list = async () => {
  try {
    const files = await readdir(PATH_TO_FILE_TO_REMOVE);
    files.forEach((file) => console.log(file));
  } catch (error) {
    if (error.code === ERROR_NO_ENTITY_CODE) {
      throw new Error(ERROR_MESSAGE);
    }
  }
};

await list();
