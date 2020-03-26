import { makeFetchAction } from 'redux-api-call';
import { flow, get, has, map, path } from 'lodash/fp';

import { gql } from '../libs';
import { respondToSuccess } from './middlewares/api-reaction';

const GET_CURRENT_USER = 'GET_CURRENT_USER';

const GetCurrentUserAPI = makeFetchAction(
  GET_CURRENT_USER,
  gql`
    query {
      get_me {
        full_name
      }
    }
  `
);

export const getCurrentUser = () => {
  return respondToSuccess(GetCurrentUserAPI.actionCreator(), resp => {
    if (resp.errors) {
      console.error('Err: ', resp.errors);
      return;
    }
    return;
  });
};

export const getCurrentUserSelector = flow(
  GetCurrentUserAPI.dataSelector,
  get('data.get_me')
);

export const verifyLogin = user => {
  if (!user) {
    return false;
  }
  return true;
};

export default {};
