import { writeFile, access, constants } from 'node:fs/promises';

const PATH_TO_NEW_FILE = 'src/fs/files/fresh.txt';

const CONTENT = 'I am fresh and young';
const ERROR_MESSAGE = 'FS operation failed';
const ERROR_NO_ENTITY_CODE = 'ENOENT';

const create = async () => {
  try {
    await access(PATH_TO_NEW_FILE, constants.F_OK);
    throw new Error();
  } catch (error) {
    if (error.code === ERROR_NO_ENTITY_CODE) {
      await writeFile(PATH_TO_NEW_FILE, CONTENT);
    } else {
      throw new Error(ERROR_MESSAGE);
    }
  }
};

await create();
