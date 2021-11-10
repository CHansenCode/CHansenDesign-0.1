import jwtDecode from 'jwt-decode';

export const localUser = () => {
  const localToken = window.localStorage.getItem('jwtToken');
  const userdata = jwtDecode(localToken);

  return userdata.username;
};
