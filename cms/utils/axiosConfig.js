import axios from 'axios';
import { useState, useEffect } from 'react';

export const axiosConfig = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  let authToken = window.localStorage.getItem('auth-token');

  let key = 'auth-token';

  if (authToken) {
    axios.defaults.headers[key] = authToken;
  }

  return (axios.defaults.headers[key] = authToken);
};
