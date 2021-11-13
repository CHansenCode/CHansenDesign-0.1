import { useDispatch } from 'react-redux';

export const storeRefresh = () => {
  const dispatch = useDispatch();
  let localStorage = {};
  if (typeof window !== 'undefined') {
    localStorage.username = window.localStorage.getItem('username');
  }
  console.log(localStorage);
};
