import { DEFAULT_TICKET } from '../constants/index';

const CHANGE_LINE_NUMBER = 'CHANGE_LINE_NUMBER';
const CHANGE_DEFAULT_TICKETS_DATA = 'CHANGE_DEFAULT_TICKETS_DATA';
const UPDATE_TICKETS_DATA = 'UPDATE_TICKETS_DATA';
const ADD_EMPTY_TICKET = 'ADD_EMPTY_TICKET';
const REMOVE_ONE_TICKET = 'REMOVE_ONE_TICKET';
const QUICK_PICK_ALL = 'QUICK_PICK_ALL';
const CLEAR_ALL = 'CLEAR_ALL';
const UPDATE_STATUS_TICKET = 'UPDATE_STATUS_TICKET';

const defaultLineNumber = DEFAULT_TICKET;

const getEmptyTicket = index => ({
  id: `tickets ${index}`,
  name: `Tickets ${index + 1}`,
  numbers: [],
  number: null,
  isDone: false
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

export const quickPickAll = isQuickPickAll => dispatch => {
  dispatch({
    type: QUICK_PICK_ALL,
    payload: {
      isQuickPickAll
    }
  });
};

export const clearAll = isClearAll => dispatch => {
  dispatch({
    type: CLEAR_ALL,
    payload: {
      isClearAll
    }
  });
};

export const updateStatusTicket = (idTicket, isDone) => dispatch => {
  dispatch({
    type: UPDATE_STATUS_TICKET,
    payload: {
      idTicket,
      isDone
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
    const newTickets = [...state];

    switch (action.type) {
      case CHANGE_DEFAULT_TICKETS_DATA:
        return getDefaultTicketsByLineNumber(action.payload);
      case UPDATE_TICKETS_DATA:
        const { idTicket, activeNumbers, activeNumber } = action.payload;
        const indexTicketUpdate = state.findIndex(
          ticket => ticket.id === idTicket
        );

        state[indexTicketUpdate] = {
          id: idTicket,
          name: idTicket,
          numbers: activeNumbers,
          number: activeNumber
        };
        return state;
      case ADD_EMPTY_TICKET:
        newTickets.push(getEmptyTicket(action.payload));

        return newTickets;
      case REMOVE_ONE_TICKET:
        return newTickets
          .filter(ticket => ticket.id !== action.payload)
          .map((ticket, index) => ({ ...ticket, id: `tickets ${index}` }));
      case UPDATE_STATUS_TICKET:
        const indexUpdate = newTickets
          .map(ticket => ticket.id)
          .indexOf(action.payload.idTicket);

        newTickets[indexUpdate].isDone = action.payload.isDone;
        return newTickets;
      default:
        return state;
    }
  },

  isQuickPickAll: (state = false, action = {}) => {
    switch (action.type) {
      case QUICK_PICK_ALL:
        state = action.payload.isQuickPickAll;
        return state;
      default:
        return state;
    }
  },
  isClearAll: (state = false, action = {}) => {
    switch (action.type) {
      case CLEAR_ALL:
        state = action.payload.isClearAll;
        return state;
      default:
        return state;
    }
  }
};
