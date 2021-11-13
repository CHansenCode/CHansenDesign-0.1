import { SET_CURRENT_USER } from '@/actions/actionTypes';

const auth = (auth = initialProps, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...auth,
        user: action.payload,
        isAuthenticated: true,
      };
    default:
      return auth;
  }
};

const initialProps = {
  user: '',
  isAuthenticated: false,
};

export default auth;
