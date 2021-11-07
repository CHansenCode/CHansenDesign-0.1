import Sitemap from './Sitemap/Sitemap';
import BackToTop from './BackToTop/BackToTop';
import Legal from './Legal/Legal';
import Social from './Social/Social';

import css from './Footer.module.scss';

const Footer = ({ colors, id, className }) => {
  return (
    <footer
      style={{ color: colors.primary }}
      id={id}
      className={`${css.footer} ${className}`}
    >
      <div className={css.social}>
        <Social colors={colors} />
      </div>

      <div className={css.info}>
        <Legal />
      </div>

      <div className={css.siteMap}>
        <Sitemap colors={colors} />
      </div>

      <div className={css.backToTop}>
        <BackToTop colors={colors} />
      </div>
    </footer>
  );
};

export default Footer;
