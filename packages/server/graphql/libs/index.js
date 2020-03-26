import { ForbiddenError } from 'apollo-server-express';
import { filter } from 'lodash/fp';
import { skip } from 'graphql-resolvers';

import { SYS_ADMIN, SYS_MOD, USER } from '../enums/userRoles';

const validItems = rejectRoles => filter(role => !rejectRoles.includes(role));

export const checkAuthentication = (parent, args, { currentUser }) =>
  currentUser ? skip : new ForbiddenError('Not authenticated as user.');

export const checkAuthorization = (allowRoles = USER, rejectRoles = []) => (
  parent,
  args,
  { currentUser }
) => {
  if (!currentUser) {
    return new Error('not authorized to do action.');
  }
  let allows = [];

  if (allowRoles === undefined || typeof allowRoles === 'number') {
    switch (allowRoles) {
      case USER:
        allows.push(USER);
      // falls through
      case SYS_MOD:
        allows.push(SYS_MOD);
      // falls through
      case SYS_ADMIN:
        allows.push(SYS_ADMIN);
        break;
      default:
        throw new Error('not authorized to do action.');
    }
  } else {
    allows = allowRoles;
  }

  if (rejectRoles && rejectRoles.length) {
    allows = validItems(rejectRoles)(allows);
  }

  return !allows.length || allows.includes(currentUser.role)
    ? skip
    : new Error('not authorized to do action.');
};
