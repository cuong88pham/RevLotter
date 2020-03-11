import { UserModel } from '../../../models';
import { WAIT_RESULT, WIN, LOSE } from '../../enums/ticketStatus';
export default {
  Ticket: {
    id: payload => payload.id,
    owner: async payload => {
      return await UserModel.detailUserById(payload.owner_id);
    }
  },
  TicketStatus: { WAIT_RESULT, WIN, LOSE }
};
