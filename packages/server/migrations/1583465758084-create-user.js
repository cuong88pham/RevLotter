import '../_env';
import { SYS_ADMIN, SYS_MOD, USER } from '../graphql/enums/userRoles';
import { U_ACTIVE } from '../graphql/enums/userStatus';
import { database, auth } from '../services/rev-firebase';

const userCollection = database.collection('users');

module.exports.up = async function() {
  const users = [
    {
      email: 'admin@revlotter.io',
      password: '123456',
      first_name: 'admin',
      last_name: 'revlotter',
      role: SYS_ADMIN,
      status: U_ACTIVE,
      created_at: '2020-03-13T03:30:40.660Z',
      updated_at: '2020-03-13T03:30:40.660Z'
    },
    {
      email: 'mod@revlotter.io',
      first_name: 'mod',
      password: '123456',
      last_name: 'revlotter',
      role: SYS_MOD,
      status: U_ACTIVE,
      created_at: '2020-03-13T03:30:40.660Z',
      updated_at: '2020-03-13T03:30:40.660Z'
    },
    {
      email: 'user@revlotter.io',
      first_name: 'user',
      password: '123456',
      last_name: 'revlotter',
      role: USER,
      status: U_ACTIVE,
      created_at: '2020-03-13T03:30:40.660Z',
      updated_at: '2020-03-13T03:30:40.660Z'
    }
  ];
  for (let u of users) {
    const { status, role } = u;
    const userRecord = await auth.createUser(u);
    await auth.setCustomUserClaims(userRecord.uid, { status, role });

    const fullUserInfo = {
      uid: userRecord.uid,
      ...u
    };
    delete fullUserInfo.password;
    await userCollection.doc(userRecord.uid).set(fullUserInfo);
  }
  // next();
};

module.exports.down = function(next) {
  next();
};
