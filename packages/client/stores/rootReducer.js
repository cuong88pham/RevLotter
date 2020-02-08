import { combineReducers } from 'redux';
import initialState from './initState';

export default combineReducers({
  ...initialState
});
