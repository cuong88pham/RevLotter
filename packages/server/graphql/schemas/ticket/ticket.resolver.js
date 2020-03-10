import { UserModel } from '../../../models';
export default {
  Ticket: {
    id: payload => payload.id,
    owner: async payload => {
      console.log({ payload });
      return await UserModel.detailUserById(payload.owner_id);
    }
  }
};
