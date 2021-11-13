import { useEffect, useState } from 'react';

export const localToken = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return window.localStorage.getItem('auth-token');
};
