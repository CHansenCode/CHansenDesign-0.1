import {
  LOGIN_CREDENTIALS_FAILED,
  LOGIN_CREDENTIALS_FAILED_RESET,
} from '@/actions/actionTypes';

const errorHandler = (error = initState, action) => {
  switch (action.type) {
    case LOGIN_CREDENTIALS_FAILED:
      return { ...error, loginCredentials: action.payload };
    case LOGIN_CREDENTIALS_FAILED_RESET:
      return { ...error, loginCredentials: '' };
    default:
      return error;
  }
};

const initState = {
  loginCredentials: '',
};

export default errorHandler;
