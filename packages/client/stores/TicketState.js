import uuid from 'uuid';

import {
  DEFAULT_TICKET,
  MAX_NUMBER_LIST_5_NUMBERS,
  MAX_NUMBER_LIST_1_NUMBER
} from '../constants/index';
import { getRandomIntArray, getRandomInt } from '../utils';

const CHANGE_LINE_NUMBER = 'CHANGE_LINE_NUMBER';
const CHANGE_DEFAULT_TICKETS_DATA = 'CHANGE_DEFAULT_TICKETS_DATA';
const UPDATE_TICKETS_DATA = 'UPDATE_TICKETS_DATA';
const ADD_EMPTY_TICKET = 'ADD_EMPTY_TICKET';
const REMOVE_ONE_TICKET = 'REMOVE_ONE_TICKET';
const QUICK_PICK_ALL = 'QUICK_PICK_ALL';
const CLEAR_ALL = 'CLEAR_ALL';
const UPDATE_STATUS_TICKET = 'UPDATE_STATUS_TICKET';
const GET_NUMBERS_WINNING = 'GET_NUMBERS_WINNING';

const defaultLineNumber = DEFAULT_TICKET;

const getEmptyTicket = id => ({
  id,
  name: `Tickets ${id}`,
  numbers: [],
  number: null,
  isDone: false
});

const getDefaultTicketsByLineNumber = (lineNumber = defaultLineNumber) => {
  const tickets = [];
  for (let i = 0; i < lineNumber; i++) tickets.push(getEmptyTicket(uuid()));
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
    payload: uuid()
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

export const quickPickAll = () => dispatch => {
  dispatch({
    type: QUICK_PICK_ALL
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

export const getNumbersWinning = (numbersWinning = []) => dispatch => {
  dispatch({
    type: GET_NUMBERS_WINNING,
    payload: numbersWinning
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
        return newTickets.filter(ticket => ticket.id !== action.payload);
      case UPDATE_STATUS_TICKET:
        const indexUpdate = newTickets
          .map(ticket => ticket.id)
          .indexOf(action.payload.idTicket);

        newTickets[indexUpdate].isDone = action.payload.isDone;
        return newTickets;
      case QUICK_PICK_ALL:
        const randomTickets = newTickets.map(ticket => ({
          id: ticket.id,
          name: ticket.name,
          numbers: getRandomIntArray(MAX_NUMBER_LIST_5_NUMBERS, 5),
          number: getRandomInt(1, MAX_NUMBER_LIST_1_NUMBER),
          isDone: true
        }));
        return randomTickets;
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
