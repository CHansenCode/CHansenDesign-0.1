import Logo from '../../public/Logo/Logo';
import PlaceIndicator from './PlaceIndicator/PlaceIndicator';
import { List, Item, Button } from 'chansencode-lib';
import { NextLink } from '@/components/NextLink';

import { deskNav } from '@/config';

import css from './Header.module.scss';

const Header = ({ colors, className }) => {
  return (
    <header
      style={{ color: colors.primary }}
      className={`${className} ${css.header}`}
    >
      <nav className={css.nav}>
        <NextLink href="/" exact activeColor="transparent">
          <div className={css.logo}>
            <Logo colors={colors} />
          </div>
        </NextLink>

        <div className={css.threeWords}>
          <h5>Architecture</h5>
          <h5>Webdesign</h5>
          <h5>& Graphics</h5>
        </div>

        <div className={css.placeIndicator}>
          <PlaceIndicator colors={colors} />
        </div>

        <List className={css.links}>
          {deskNav.map((link, i) => (
            <NextLink
              activeColor={colors.secondary}
              key={`${link.title}${i}`}
              href={link.route}
            >
              <Item className={css.link} text={link.title} />
            </NextLink>
          ))}
        </List>
      </nav>
    </header>
  );
};

export default Header;
