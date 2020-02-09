const CHANGE_LINE_NUMBER = 'CHANGE_LINE_NUMBER';
const CHANGE_DEFAULT_TICKETS_DATA = 'CHANGE_DEFAULT_TICKETS_DATA';
const UPDATE_TICKETS_DATA = 'UPDATE_TICKETS_DATA';

const defaultLineNumber = 3;
const getDefaultTicketsByLineNumber = lineNumber => {
  const tickets = [];
  for (let i = 0; i < lineNumber; i++)
    tickets.push({
      id: `tickets ${i}`,
      numbers: [],
      number: null
    });
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

export const updateTicketsData = (
  idTicket,
  activeNumbers,
  activeNumber
) => dispatch => {
  idTicket &&
    dispatch({
      type: UPDATE_TICKETS_DATA,
      payload: {
        idTicket,
        activeNumbers,
        activeNumber
      }
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
        const { idTicket, activeNumbers, activeNumber } = action.payload;
        const indexTicketUpdate = state.findIndex(
          ticket => ticket.id === idTicket
        );

        state[indexTicketUpdate] = {
          id: idTicket,
          numbers: activeNumbers,
          number: activeNumber
        };
        return state;
      default:
        return state;
    }
  }
};
