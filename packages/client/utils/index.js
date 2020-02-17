export const parseBoolean = val =>
  !val || val === 'false' || val === 'null' || val === 'undefined'
    ? false
    : true;
