import { access, rename as nodeFSRename } from 'node:fs/promises';
import path from 'node:path';

const PATH_TO_FS_FOLDER = 'src/fs/files';
const PATH_TO_WRONG_FILE = path.join(PATH_TO_FS_FOLDER, 'wrongFilename.txt');
const PATH_TO_PROPER_FILE = path.join(PATH_TO_FS_FOLDER, 'properFilename.md');

const ERROR_MESSAGE = 'FS operation failed';
const ERROR_NO_ENTITY_CODE = 'ENOENT';

const rename = async () => {
  try {
    await access(PATH_TO_WRONG_FILE);
  } catch (error) {
    if (error.code === ERROR_NO_ENTITY_CODE) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  try {
    await access(PATH_TO_PROPER_FILE);
    throw new Error();
  } catch (error) {
    if (error.code === ERROR_NO_ENTITY_CODE) {
      await nodeFSRename(PATH_TO_WRONG_FILE, PATH_TO_PROPER_FILE);
    } else {
      throw new Error(ERROR_MESSAGE);
    }
  }
};

await rename();
