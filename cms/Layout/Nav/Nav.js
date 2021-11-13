import Footer from './Footer/Footer';
import Lists from './Lists/Lists';
import Header from './Header/Header';

import css from './Nav.module.scss';

const Nav = ({ meta, setMeta }) => {
  let user = window.localStorage.getItem('auth-token');

  const propStyle = {
    aside: {
      left: meta.showNav ? '0' : '-14rem',
      width: meta.navWidth,
      background: meta.darkmode ? meta.bgDark : meta.bg,
    },
  };

  return user ? (
    <aside style={propStyle.aside} className={css.aside}>
      <nav className={css.nav}>
        <Header meta={meta} className={css.header} />

        <Lists meta={meta} className={css.navLinks} />

        <Footer meta={meta} setMeta={setMeta} className={css.footer} />
      </nav>
    </aside>
  ) : null;
};

export default Nav;
