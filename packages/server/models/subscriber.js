import * as Joi from '@hapi/joi';
import { v1 as uuidv1 } from 'uuid';
import { database } from '../services';

const COLLECTION = 'subscribers';

const SubscriberSchema = Joi.object({
  _id: Joi.string().default(uuidv1()),
  id: Joi.string().default(uuidv1()),
  email: Joi.string()
    .email()
    .required(),
  status: Joi.boolean().default(true)
});

export const add = async input => {
  return new Promise(async resolve => {
    const { error, value } = await SubscriberSchema.validate(input);
    if (error) return resolve({ error, data: value });

    const recordError = await database
      .ref([COLLECTION, value._id].join('/'))
      .set(value);
    if (!recordError) {
      return resolve({ error: recordError, data: value });
    }

    return resolve({ error: recordError, data: undefined });
  });
};

export const removeById = async id => {
  return new Promise(async resolve => {
    const actionError = await database
      .ref([COLLECTION, '', id].join('/'))
      .remove();
    return resolve({ error: actionError });
  });
};

export const listAll = async () => {
  return new Promise(async resolve => {
    await database.ref(COLLECTION).on('value', snapshot => {
      return resolve({ error: undefined, data: snapshot.val() });
    });
  });
};
