import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

export const userValidation = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  let localUser;
  let decoded = jwtDecode(window.localStorage.getItem('auth-token'));

  localUser = decoded.username;

  return localUser;
};
