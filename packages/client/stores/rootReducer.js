import { combineReducers } from 'redux';
import initialState from './initState';
import SettingState from './SettingState';

export default combineReducers({
  ...initialState,
  ...SettingState
});
