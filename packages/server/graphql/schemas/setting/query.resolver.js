import { combineResolvers } from 'graphql-resolvers';
import { checkAuthorization } from '../../libs';
import { SYS_ADMIN } from '../../enums/userRoles';
import { getSettings } from '../../../models/settings';

export default {
  Query: {
    get_settings: combineResolvers(checkAuthorization(SYS_ADMIN), async () => {
      const { data, error } = await getSettings();
      if (!error) return data;
      throw new Error('Cannot get settings!');
    })
  }
};
