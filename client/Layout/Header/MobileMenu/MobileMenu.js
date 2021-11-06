import { NextLink } from '@/components/NextLink';
import Logo from '@/public/Logo/Logo';
import { List, Item, Button } from 'chansencode-lib';
import { mobNav } from '@/config';

import css from './MobileMenu.module.scss';

const MobileMenu = ({ mobNavOpen, setMobNavOpen, colors }) => {
  return (
    <div className={`${css.wrapper} ${mobNavOpen && css.mobNav_closed}`}>
      <div className={css.innerWrapper}>
        <div className={css.logo}>
          <Logo />
        </div>
        <List className={css.ul}>
          {mobNav.map((link, i) => (
            <NextLink
              activeColor={colors.secondary}
              key={`${link.title}${i}`}
              href={link.route}
            >
              <Item text={link.title} onClick={() => setMobNavOpen(false)} />
            </NextLink>
          ))}
        </List>
      </div>
    </div>
  );
};

export default MobileMenu;
