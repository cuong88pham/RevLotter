import { TOP_RIGHT } from '../enums/toastPosition';
import { toast } from 'react-toastify';

export const TOAST_INFO = 'TOAST_INFO';
export const TOAST_WARN = 'TOAST_WARN';
export const TOAST_ERROR = 'TOAST_ERROR';
export const TOAST_SUCCESS = 'TOAST_SUCCESS';
export const TOAST_DEFAULT = 'TOAST_DEFAULT';

const TOAST_DEFAULT_OPTIONS = {
  position: TOP_RIGHT,
  autoClose: 5000,
  pauseOnHover: true,
  closeOnClick: true,
  hideProgressBar: false
};
const getToastFunction = (type, options = {}) => {
  const optsMerge = Object.assign({}, TOAST_DEFAULT_OPTIONS, options);
  let doToast = null;
  switch (type) {
    case TOAST_SUCCESS:
      doToast = toast.success;
      break;
    case TOAST_ERROR:
      doToast = toast.error;
      break;
    case TOAST_WARN:
      doToast = toast.warn;
      break;
    case TOAST_INFO:
      doToast = toast.info;
      break;
    case TOAST_DEFAULT:
      doToast = toast;
      break;
    default:
      return doToast;
  }
  return message => doToast(message, optsMerge);
};

export default {
  displayNotify(state = {}, { type, payload = {} }) {
    const { message, options = {} } = payload;
    if (!message) {
      return state;
    }
    const doToast = getToastFunction(type, options);
    if (doToast) {
      doToast(message);
      return payload;
    }
    return state;
  }
};
