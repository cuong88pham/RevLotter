import { combineReducers } from 'redux';
import TicketState from './TicketState';
import SettingState from './SettingState';
import ToastState from './ToastState';

export default combineReducers({
  ...TicketState,
  ...SettingState,
  ...ToastState
});
