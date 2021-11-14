import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import router from 'next/router';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from '../actions/actionTypes';

export const userValidation = () => {
  const dispatch = useDispatch();

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  let checkIfToken = window.localStorage.getItem('auth-token');

  if (checkIfToken) {
    let decoded = jwtDecode(window.localStorage.getItem('auth-token'));
  } else {
    router.push('/');
  }

  return;
};
