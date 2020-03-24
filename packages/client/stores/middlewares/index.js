import reduxThunk from 'redux-thunk';
import { middleware as apiMiddleware } from 'redux-api-call';
import { middleware as apiReactionMiddleware } from './api-reaction';
import apiPrefix from './api-prefix';

const env = process.env.NODE_ENV || 'development';
const base =
  process.env.API_SERVER_URL || 'https://api.thecryptolotter.io/staging';

export const isServer = !process.browser;

const logger = () => next => action => {
  isServer && env === 'development' && console.log('REDUX: %s', action.type);
  return next(action);
};

export default [
  logger,
  reduxThunk,
  apiPrefix(base),
  apiMiddleware,
  apiReactionMiddleware
];
