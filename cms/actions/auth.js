import jwtDecode from 'jwt-decode';
import * as actions from './actionTypes';
import { authUser } from '../api';

export const onSubmitLoginUser = formData => dispatch => {
  const lowerCased = {
    username: formData.username.toLowerCase(),
    password: formData.password,
  };

  authUser(lowerCased)
    .then(res => {
      let decoded = jwtDecode(res.data.token);

      dispatch(setCurrentUser(decoded.username));
      localStorage.setItem('auth-token', res.data.token);
      localStorage.setItem('username', decoded.username);
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: LOGIN_CREDENTIALS_FAILED,
        payload: 'Incorrect credentials',
      });
    });
};

export const setCurrentUser = data => {
  return {
    type: actions.SET_CURRENT_USER,
    payload: data,
  };
};

export const logoutUser = () => dispatch => {
  //
  localStorage.removeItem('username');
  dispatch(setCurrentUser(null));
};
