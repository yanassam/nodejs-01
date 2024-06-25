import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  const date = await fs.readFile(PATH_DB, 'utf-8');

  return JSON.parse(date);
};

console.log(await getAllContacts());
