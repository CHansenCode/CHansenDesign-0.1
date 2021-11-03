import Logo from '../../public/Logo/Logo';
import PlaceIndicator from './PlaceIndicator/PlaceIndicator';
import { List, Item } from 'chansencode-lib';
import { NextLink } from '@/components/NextLink';

import { deskNav } from '@/config';

import css from './Header.module.scss';

const Header = ({ className }) => {
  return (
    <header style={{ color: 'teal' }} className={`${className} ${css.header}`}>
      <nav className={css.nav}>
        <div className={css.logo}>
          <Logo />
        </div>

        <div className={css.threeWords}>
          <h5>Architecture</h5>
          <h5>Webdesign</h5>
          <h5>& Graphics</h5>
        </div>

        <div className={css.placeIndicator}>
          <PlaceIndicator />
        </div>

        <List className={css.links}>
          {deskNav.map((link, i) => (
            <NextLink key={`${link.title}${i}`} href={link.route}>
              <Item text={link.title} />
            </NextLink>
          ))}
        </List>
      </nav>
    </header>
  );
};

export default Header;
