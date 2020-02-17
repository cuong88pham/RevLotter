import { combineReducers } from 'redux';
import TicketState from './TicketState';
import SettingState from './SettingState';

export default combineReducers({
  ...TicketState,
  ...SettingState
});
