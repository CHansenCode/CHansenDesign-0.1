import {
  ERROR_HANDLER_MODAL,
  LOGIN_CREDENTIALS_FAILED,
  LOGIN_CREDENTIALS_FAILED_RESET,
} from '@/actions/actionTypes';

const errorHandler = (error = initState, action) => {
  switch (action.type) {
    case LOGIN_CREDENTIALS_FAILED:
      return { ...error, loginCredentials: action.payload };
    case LOGIN_CREDENTIALS_FAILED_RESET:
      return { ...error, loginCredentials: '' };
    case ERROR_HANDLER_MODAL:
      return { ...error, modal: action.payload };
    default:
      return error;
  }
};

const initState = {
  loginCredentials: '',
  modal: '',
};

export default errorHandler;
