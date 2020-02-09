const CHANGE_LINE_NUMBER = 'CHANGE_LINE_NUMBER';
const CHANGE_DEFAULT_TICKETS_DATA = 'CHANGE_DEFAULT_TICKETS_DATA';
const UPDATE_TICKETS_DATA = 'UPDATE_TICKETS_DATA';
const ADD_EMPTY_TICKET = 'ADD_EMPTY_TICKET';

const defaultLineNumber = 3;
const getEmptyTicket = index => ({
  id: `tickets ${index}`,
  numbers: []
});
const getDefaultTicketsByLineNumber = (lineNumber = defaultLineNumber) => {
  const tickets = [];
  for (let i = 0; i < lineNumber; i++) tickets.push(getEmptyTicket(i));
  return tickets;
};

export const changeLineNumberAction = (
  lineNumber = defaultLineNumber
) => dispatch => {
  dispatch({
    type: CHANGE_LINE_NUMBER,
    payload: lineNumber
  });
  dispatch({
    type: CHANGE_DEFAULT_TICKETS_DATA,
    payload: lineNumber
  });
};

export const updateTicketsData = newTicket => dispatch => {
  newTicket &&
    dispatch({
      type: UPDATE_TICKETS_DATA,
      payload: newTicket
    });
};

export const addEmptyTicket = currentLineNumber => dispatch => {
  dispatch({
    type: ADD_EMPTY_TICKET
  });
  dispatch({
    type: CHANGE_LINE_NUMBER,
    payload: ++currentLineNumber
  });
};

export default {
  currentLineNumber: (state = defaultLineNumber, action = {}) => {
    switch (action.type) {
      case CHANGE_LINE_NUMBER:
        return action.payload;
      default:
        return state;
    }
  },
  ticketsState: (
    state = getDefaultTicketsByLineNumber(defaultLineNumber) || [],
    action
  ) => {
    switch (action.type) {
      case CHANGE_DEFAULT_TICKETS_DATA:
        return getDefaultTicketsByLineNumber(action.payload);
      case UPDATE_TICKETS_DATA:
        // Update tickets data
        return state;
      case ADD_EMPTY_TICKET:
        const newTickets = [...state];
        newTickets.push(getEmptyTicket(state.length));
        return newTickets;
      default:
        return state;
    }
  }
};
