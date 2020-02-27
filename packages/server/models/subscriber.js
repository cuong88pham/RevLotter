import * as Joi from '@hapi/joi';
import { database } from '../services';
import md5 from 'md5';

const COLLECTION = 'subscribers';

const SubscriberSchema = Joi.object({
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
      .ref([COLLECTION, md5(value.email)].join('/'))
      .set(value);
    if (!recordError) {
      return resolve({ error: recordError, data: value });
    }

    return resolve({ error: recordError, data: undefined });
  });
};

export const removeById = async key => {
  return new Promise(resolve => {
    database
      .ref([COLLECTION, '', key].join('/'))
      .remove()
      .then(function() {
        return resolve({ error: undefined });
      })
      .catch(function(error) {
        return resolve({ error });
      });
  });
};

export const listAll = async () => {
  return new Promise(async resolve => {
    await database.ref(COLLECTION).on('value', snapshot => {
      return resolve({ error: undefined, data: snapshot.val() });
    });
  });
};
