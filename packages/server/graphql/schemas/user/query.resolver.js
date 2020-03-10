import { combineResolvers } from 'graphql-resolvers';
import { checkAuthorization, checkAuthentication } from '../../libs';
import { SYS_MOD } from '../../enums/userRoles';
import { UserModel } from '../../../models';

export default {
  Query: {
    get_users: combineResolvers(
      checkAuthorization(SYS_MOD),
      async (_, { filter }) => {
        const { data, pageToken } = await UserModel.listUser(filter);
        return { data, pageToken };
      }
    ),
    get_user: combineResolvers(
      checkAuthorization(SYS_MOD),
      async (_, { uid }) => await UserModel.detailUserById(uid)
    ),
    get_me: combineResolvers(
      checkAuthentication,
      async (_, __, { currentUser }) =>
        await UserModel.detailUserById(currentUser.uid)
    )
  }
};
