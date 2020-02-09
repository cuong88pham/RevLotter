const CHANGE_LINE_NUMBER = 'CHANGE_LINE_NUMBER';
const CHANGE_DEFAULT_TICKETS_DATA = 'CHANGE_DEFAULT_TICKETS_DATA';
const UPDATE_TICKETS_DATA = 'UPDATE_TICKETS_DATA';
const ADD_EMPTY_TICKET = 'ADD_EMPTY_TICKET';
const REMOVE_ONE_TICKET = 'REMOVE_ONE_TICKET';

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

const changeLineNumberActionCreator = lineNumber => ({
  type: CHANGE_LINE_NUMBER,
  payload: lineNumber
});

export const changeLineNumberAction = (
  lineNumber = defaultLineNumber
) => dispatch => {
  dispatch(changeLineNumberActionCreator(lineNumber));
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
    type: ADD_EMPTY_TICKET,
    payload: currentLineNumber
  });
  dispatch(changeLineNumberActionCreator(++currentLineNumber));
};

export const removeOneTicket = ({ id, currentLineNumber }) => dispatch => {
  dispatch({
    type: REMOVE_ONE_TICKET,
    payload: id
  });
  dispatch(changeLineNumberActionCreator(--currentLineNumber));
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
    const newTickets = [...state];
    switch (action.type) {
      case CHANGE_DEFAULT_TICKETS_DATA:
        return getDefaultTicketsByLineNumber(action.payload);
      case UPDATE_TICKETS_DATA:
        // Update tickets data
        return state;
      case ADD_EMPTY_TICKET:
        newTickets.push(getEmptyTicket(action.payload));
        return newTickets;
      case REMOVE_ONE_TICKET:
        return newTickets
          .filter(ticket => ticket.id !== action.payload)
          .map((ticket, index) => ({ ...ticket, id: `tickets ${index}` }));
      default:
        return state;
    }
  }
};
