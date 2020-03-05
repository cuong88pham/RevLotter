import { database, auth } from '../services';
import { U_BANNED } from '../graphql/enums/userStatus';

const userCollection = database.collection('users');

export const createNewUser = async payload => {
  try {
    const { status, role } = payload;
    const userRecord = await auth.createUser(payload);
    await auth.setCustomUserClaims(userRecord.uid, { status, role });

    const fullUserInfo = {
      uid: userRecord.uid,
      ...payload
    };
    delete fullUserInfo.password;
    await userCollection.doc(userRecord.uid).set(fullUserInfo);

    return { data: fullUserInfo };
  } catch (error) {
    return { error };
  }
};

export const listUser = async ({ nextPageToken, pageSize = 1000 }) => {
  try {
    let arrayUser = [];
    let userInfos = [];
    const { users, pageToken } = await auth.listUsers(
      pageSize,
      nextPageToken ? nextPageToken : undefined
    );

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
