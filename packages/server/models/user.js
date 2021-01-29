import * as Joi from '@hapi/joi';
import { v1 as uuidv1 } from 'uuid';
import moment from 'moment';
import { database, auth } from '../services';
import { U_BANNED, U_PENDING } from '../graphql/enums/userStatus';
import { USER } from '../graphql/enums/userRoles';

const userCollection = database.collection('users');

const UserSchema = Joi.object({
  id: Joi.string().default(uuidv1()),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().allow(''),
  status: Joi.number().default(U_PENDING),
  role: Joi.number().default(USER),
  cookies_accepted_at: Joi.date()
    .iso()
    .allow(null),
  address: Joi.string().default(''),
  registered_wallet_at: Joi.date()
    .iso()
    .allow(null),
  nickname: Joi.string().default(null),
  avatar: Joi.string().default(''),
  created_at: Joi.date()
    .iso()
    .default(moment().toISOString()),
  updated_at: Joi.date()
    .iso()
    .default(moment().toISOString()),
  wallet_provider: Joi.string().default(null),
  tickets_owned: Joi.number().default(0),
  actionable_activities: Joi.number().default(0),
  badges: Joi.array().default([])
});

export const createNewUser = async payload => {
  try {
    const { error, value } = await UserSchema.validate(payload);
    if (error) throw error;

    const { status, role } = value;
    const userRecord = await auth.createUser(value);
    await auth.setCustomUserClaims(userRecord.uid, {
      status,
      role,
      id: value.id
    });

    const fullUserInfo = {
      uid: userRecord.uid,
      ...value
    };
    delete fullUserInfo.password;
    await userCollection.doc(userRecord.uid).set(fullUserInfo);

    return { data: fullUserInfo };
  } catch (error) {
    return { error };
  }
};

export const listUser = async ({ nextPageToken, pageSize = 10 }) => {
  try {
    let arrayUser = [];
    let userInfos = [];
    const { users, pageToken } = nextPageToken
      ? await auth.listUsers(pageSize, nextPageToken)
      : await auth.listUsers(pageSize);

    users.forEach(async userRecord => {
      arrayUser.push(userRecord.toJSON());
    });
    const arrayUID = arrayUser.map(item => item.uid);
    const snapshot = await userCollection.where('uid', 'in', arrayUID).get();

    if (snapshot.empty) return { data: [], pageToken };

    snapshot.forEach(doc => {
      userInfos.push(doc.data());
    });
    return { data: userInfos, pageToken };
  } catch (error) {
    console.log('listUser', { nextPageToken, pageSize, error });
    return { error };
  }
};

export const detailUserById = async uid => {
  const doc = await userCollection.doc(uid).get();
  return doc.data();
};

export const updateUserInfo = async (uid, newUserInfo) => {
  try {
    await userCollection.doc(uid).update(newUserInfo);
    return true;
  } catch (error) {
    console.log('updateUserInfo', { uid, newUserInfo, error });
    return false;
  }
};

export const updateUserStatus = async ({ uid, action }) => {
  try {
    await auth.setCustomUserClaims(uid, {
      status: action,
      disable: action === U_BANNED
    });
    await userCollection.doc(uid).update({ status: action });
    return true;
  } catch (error) {
    console.log('updateUserStatus', { uid, action, error });
    return false;
  }
};
