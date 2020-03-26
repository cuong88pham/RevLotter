import { combineReducers } from 'redux';
import { reducers as apiReducers } from 'redux-api-call';

import TicketState from './TicketState';
import SettingState from './SettingState';
import ToastState from './ToastState';
import UserState from './UserState';

export default combineReducers({
  ...apiReducers,
  ...TicketState,
  ...SettingState,
  ...ToastState,
  ...UserState
});
