import { combineResolvers } from 'graphql-resolvers';
import { checkAuthentication, checkAuthorization } from '../../libs';
import { SYS_MOD } from '../../enums/userRoles';
import { listTicket, detailTicketById } from '../../../models/ticket';

export default {
  Query: {
    get_tickets: combineResolvers(
      checkAuthorization(SYS_MOD),
      async (_, { filter = {} }) =>
        await listTicket({
          pageToken: filter.pageToken,
          pageSize: filter.pageSize
        })
    ),
    get_tickets_of_user: combineResolvers(
      checkAuthorization(SYS_MOD),
      async (_, { filter = {}, ownerId = '' }) =>
        await listTicket({
          pageToken: filter.pageToken,
          pageSize: filter.pageSize,
          ownerId
        })
    ),
    get_my_tickets: combineResolvers(
      checkAuthentication,
      async (_, { filter = {} }, { currentUser }) =>
        await listTicket({
          pageToken: filter.pageToken,
          pageSize: filter.pageSize,
          ownerId: currentUser.uid
        })
    ),
    get_ticket: combineResolvers(
      checkAuthentication,
      async (_, { id }, { currentUser }) => {
        const isNotAuthorized = await checkAuthorization(SYS_MOD)(
          {},
          {},
          { currentUser }
        );
        const ticket = await detailTicketById(id);
        if (isNotAuthorized && ticket.owner_id !== currentUser.uid) return {};

        return ticket;
      }
    )
  }
};
