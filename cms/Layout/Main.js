import { useHasMounted } from '@/hooks';
import { userValidation } from '@/utils';

const Main = ({ style, id, className, children }) => {
  let user = window.localStorage.getItem('auth-token');

  return user ? (
    <main style={style} id={id} className={className}>
      {children}
    </main>
  ) : null;
};

export default Main;
