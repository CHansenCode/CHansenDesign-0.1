import Link from "next/link";

import css from "./Header.module.scss";

const Header = ({ children }) => {
  return (
    <div>
      <Link href="/">
        <a>
          <div className={css.logo}>{children}</div>

          <div className={css.cmsText}>
            <p>
              <span className="interaction">C</span>ontent
              <span className="interaction">M</span>anagement
              <span className="interaction">S</span>ystem
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Header;
