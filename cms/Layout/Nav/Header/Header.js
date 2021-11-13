import Link from 'next/link';

import css from './Header.module.scss';

const Header = ({ meta, children }) => {
  return (
    <div>
      <Link href="/">
        <a>
          <div className={css.logo}>{children}</div>
        </a>
      </Link>
      <div className={css.cmsText}>
        <p>
          <span style={{ color: meta.sc }}>C</span>ontent
          <span style={{ color: meta.sc }}>M</span>anagement
          <span style={{ color: meta.sc }}>S</span>ystem
        </p>
      </div>
    </div>
  );
};

export default Header;
