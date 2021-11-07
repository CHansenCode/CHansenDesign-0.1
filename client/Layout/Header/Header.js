import { useState } from 'react';
import Logo from '../../public/Logo/Logo';
import PlaceIndicator from './PlaceIndicator/PlaceIndicator';
import { List, Item, Hamburger } from 'chansencode-lib';
import { NextLink } from '@/components/NextLink';

import MobileMenu from './MobileMenu/MobileMenu';

import { deskNav } from '@/config';

import css from './Header.module.scss';

const Header = ({ colors, className }) => {
  const [mobNavOpen, setMobNavOpen] = useState(false);
  return (
    <>
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
                boxShadow
              >
                <Item className={css.link} text={link.title} />
              </NextLink>
            ))}
          </List>
        </nav>

        <div className={css.hamburger}>
          <Hamburger
            id="hamburger"
            size="100%"
            ternary={!mobNavOpen}
            onClick={() => setMobNavOpen(!mobNavOpen)}
          />
        </div>
        <MobileMenu
          colors={colors}
          mobNavOpen={mobNavOpen}
          setMobNavOpen={setMobNavOpen}
        />
      </header>
    </>
  );
};

export default Header;
