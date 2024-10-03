import { unlink } from 'node:fs/promises';

const PATH_TO_FILE_TO_REMOVE = 'src/fs/files/fileToRemove.txt';

const ERROR_MESSAGE = 'FS operation failed';
const ERROR_NO_ENTITY_CODE = 'ENOENT';

const remove = async () => {
  try {
    await unlink(PATH_TO_FILE_TO_REMOVE);
  } catch (error) {
    if (error.code === ERROR_NO_ENTITY_CODE) {
      throw new Error(ERROR_MESSAGE);
    }
  }
};

await remove();
