import { combineResolvers } from 'graphql-resolvers';
import { checkAuthorization } from '../../libs';
import { SYS_ADMIN } from '../../enums/userRoles';
import { updateSettings } from '../../../models/settings';

export default {
  Mutation: {
    update_settings: combineResolvers(
      checkAuthorization(SYS_ADMIN),
      async (_, { input = {} }) => {
        const { data, error } = await updateSettings(input);
        if (!error) return data;
        throw new Error('update setting failed!');
      }
    )
  }
};
