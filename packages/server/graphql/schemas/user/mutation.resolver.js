import { combineResolvers } from 'graphql-resolvers';
import { UserModel } from '../../../models';
import { USER, SYS_MOD, SYS_ADMIN } from '../../enums/userRoles';
import { U_ACTIVE } from '../../enums/userStatus';
import { checkAuthorization, checkAuthentication } from '../../libs';

export default {
  Mutation: {
    regiter_account: async (_, { input }) => {
      const userInfo = Object.assign({}, input, {
        username: input.email,
        role: USER,
        status: U_ACTIVE
      });
      const { data, error } = await UserModel.createNewUser(userInfo);

      if (error) throw new Error(`register failed! ${error.message || ''}`);
      return data;
    },
    create_mod_account: combineResolvers(
      checkAuthorization(SYS_ADMIN),
      async (_, { input }) => {
        const userInfo = Object.assign({}, input, {
          username: input.email,
          role: SYS_MOD,
          status: U_ACTIVE
        });
        const { data, error } = await UserModel.createNewUser(userInfo);

        if (error) throw new Error(`create failed! ${error.message || ''}`);
        return data;
      }
    ),
    update_my_info: combineResolvers(
      checkAuthentication,
      async (_, { input = {} }, { currentUser }) =>
        await UserModel.updateUserInfo(currentUser.uid, input)
    ),
    update_user_status: combineResolvers(
      checkAuthorization(SYS_MOD),
      async (_, { uid, action }) =>
        await UserModel.updateUserStatus({ uid, action })
    )
  }
};
