import * as Joi from '@hapi/joi';
import { database } from '../services';
import { sendMailConfirmSubscribe } from '../services/mail';

const collection = database.collection('subscribers');

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

    collection
      .doc(value.email)
      .get()
      .then(async doc => {
        if (!doc.exists) {
          console.log('No such document!');
          const setDoc = await collection.doc(value.email).set(value);

          // trigger send mail confirm in here
          await sendMailConfirmSubscribe(value.email);
          return resolve({ error: null, data: value, setDoc });
        } else {
          console.log('Document data:', doc.data());
          return resolve({ error: { messages: 'Email is existed!' } });
        }
      })
      .catch(error => resolve({ error }));
  });
};

export const removeById = async key => {
  return new Promise(async resolve => {
    const deleteDoc = await collection.doc(key).delete();
    return resolve({ error: null, deleteDoc });
  });
};

export const listAll = async () => {
  return new Promise(async resolve => {
    collection
      .get()
      .then(snapshot => {
        let data = [];
        snapshot.forEach(doc => {
          data.push(doc.data());
        });
        return resolve({ error: undefined, data });
      })
      .catch(error => resolve({ error, data: undefined }));
  });
};
