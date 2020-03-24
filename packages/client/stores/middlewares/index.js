import reduxThunk from 'redux-thunk';
import { createAPIMiddleware, composeAdapters } from 'redux-api-call';
import { intercepter as graphql } from '../../libs';

import fetchInterceptor from 'redux-api-call-adapter-fetch';
import jsonInterceptor from 'redux-api-call-adapter-json';

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

const apiMiddlewares = createAPIMiddleware(
  composeAdapters(graphql, fetchInterceptor, jsonInterceptor)
);

export default [
  logger,
  reduxThunk,
  apiPrefix(base),
  apiMiddlewares,
  apiReactionMiddleware
];
