import { database } from '../services';

const settingCollection = database.collection('settings');
const MAIN_SETTING = 'main_settings';
const ERROR_CODE_NOT_FOUND_DOCUMENT = 5;

export const getSettings = async () => {
  try {
    const doc = await settingCollection.doc(MAIN_SETTING).get();
    return { data: doc.data() || {} };
  } catch (error) {
    return { error };
  }
};

export const updateSettings = async (input = {}) => {
  try {
    await settingCollection.doc(MAIN_SETTING).update(input);
  } catch (error) {
    if (error.code !== ERROR_CODE_NOT_FOUND_DOCUMENT) return { error };
    await settingCollection.doc(MAIN_SETTING).set(input);
  }

  return await getSettings();
};
