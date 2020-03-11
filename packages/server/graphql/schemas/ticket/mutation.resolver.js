import moment from 'moment';
import { combineResolvers } from 'graphql-resolvers';
import { checkAuthentication } from '../../libs';
import { createNewTicket } from '../../../models/ticket';
import { getSettings } from '../../../models/settings';
import { WAIT_RESULT } from '../../enums/ticketStatus';

const isTimeToRefuseTicket = settings => {
  const currentTime = moment();
  const { lottery_cycles, time_to_refuse_ticket } = settings;
  const offsetToEndCycle =
    lottery_cycles - (currentTime.minutes() % lottery_cycles);
  return offsetToEndCycle <= time_to_refuse_ticket;
};

const getExpiredTime = settings => {
  let currentTime = moment();
  const { lottery_cycles } = settings;
  const offsetToEndCycle =
    lottery_cycles - (currentTime.minutes() % lottery_cycles);
  return currentTime.add(offsetToEndCycle, 'minutes');
};

export default {
  Mutation: {
    create_ticket: combineResolvers(
      checkAuthentication,
      async (_, { input }, { currentUser }) => {
        const { number, numbers = [] } = input;
        if (!number || numbers.length !== 5)
          throw new Error('data input not enough!');
        const settings = await getSettings();

        if (isTimeToRefuseTicket(settings.data))
          throw new Error(
            'Ticket is refused in this time, please wait the next lottery cycles!'
          );

        const newTicket = {
          ticket: `${numbers.join('#')}#${number}`,
          owner_id: currentUser.uid,
          status: WAIT_RESULT,
          expired_at: getExpiredTime(settings.data).toISOString()
        };

        return await createNewTicket(newTicket);
      }
    )
  }
};
