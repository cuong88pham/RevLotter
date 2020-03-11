import { database } from '../services';
import { v1 as uuidv1 } from 'uuid';
import moment from 'moment';

const ticketCollection = database.collection('tickets');

export const createNewTicket = async payload => {
  try {
    const id = uuidv1();
    await ticketCollection.doc(id).set({
      ...payload,
      id,
      created_at: moment().toISOString()
    });

    return id;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export const detailTicketById = async id => {
  try {
    const doc = await ticketCollection.doc(id).get();
    return doc.data();
  } catch (error) {
    console.log({ error });
    return {};
  }
};

export const listTicket = async ({ pageToken, pageSize = 10, ownerId }) => {
  try {
    let arrayTicket = [];
    let ticketRefs = ticketCollection.orderBy('created_at', 'desc');
    if (ownerId)
      ticketRefs = ticketCollection
        .where('owner_id', '==', ownerId)
        .orderBy('created_at', 'desc');

    let snapshot = pageToken ? ticketRefs.startAfter(pageToken) : ticketRefs;
    snapshot = await snapshot.limit(pageSize).get();
    snapshot.forEach(doc => {
      arrayTicket.push(doc.data());
    });

    return {
      tickets: arrayTicket,
      nextPageToken: (arrayTicket[arrayTicket.length - 1] || {}).id
    };
  } catch (error) {
    console.log({ error });
    return { tickets: [], error };
  }
};
