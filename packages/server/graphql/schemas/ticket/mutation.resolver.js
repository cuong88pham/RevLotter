import { combineResolvers } from 'graphql-resolvers';
import { checkAuthentication } from '../../libs';
import { createNewTicket } from '../../../models/ticket';

export default {
  Mutation: {
    create_ticket: combineResolvers(
      checkAuthentication,
      async (_, { input }, { currentUser }) => {
        const newTicket = {
          ...input,
          owner_id: currentUser.uid
        };

        const ticketId = await createNewTicket(newTicket);
        return ticketId;
      }
    )
  }
};
