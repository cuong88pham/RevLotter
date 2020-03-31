import { flow, map, path } from 'lodash/fp';
import brn from 'brn';

export const parseBoolean = val =>
  !val || val === 'false' || val === 'null' || val === 'undefined'
    ? false
    : true;

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomIntArray = (maxValue, size) => {
  let randomIntArray = [];

  while (true) {
    const randomInt = getRandomInt(1, maxValue);
    if (randomIntArray.length === size) break;
    if (!randomIntArray.includes(randomInt)) randomIntArray.push(randomInt);
  }

  return randomIntArray;
};

export const isServer = !process.browser;

export const createErrorSelector = action =>
  flow(
    brn(action.errorSelector, action.errorSelector, action.dataSelector),
    path('errors'),
    map(error => error.message)
  );

export const doFunctionWithEnter = (event, func) =>
  typeof event === 'object' &&
  event.key === 'Enter' &&
  typeof func === 'function' &&
  func();
