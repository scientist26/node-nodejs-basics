import { cp, access, constants, mkdir } from 'node:fs/promises';
import path from 'node:path';

const PATH_TO_FS_FOLDER = 'src/fs';
const PATH_TO_FILES_FOLDER = path.join(PATH_TO_FS_FOLDER, 'files');
const PATH_TO_FILES_COPY_FOLDER = path.join(PATH_TO_FS_FOLDER, 'files_copy');

const ERROR_MESSAGE = 'FS operation failed';
const ERROR_NO_ENTITY_CODE = 'ENOENT';

const copy = async () => {
  try {
    await access(PATH_TO_FILES_FOLDER, constants.F_OK);
  } catch (error) {
    if (error.code === ERROR_NO_ENTITY_CODE) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  try {
    await access(PATH_TO_FILES_COPY_FOLDER, constants.F_OK);
    throw new Error();
  } catch (error) {
    if (error.code === ERROR_NO_ENTITY_CODE) {
      await mkdir(PATH_TO_FILES_COPY_FOLDER);
      await cp(PATH_TO_FILES_FOLDER, PATH_TO_FILES_COPY_FOLDER, { recursive: true, mode: constants.COPYFILE_EXCL });
    } else {
      throw new Error(ERROR_MESSAGE);
    }
  }
};

await copy();
