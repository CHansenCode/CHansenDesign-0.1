import NavLink from '../NavLink/NavLink';
import { useSelector, useDispatch } from 'react-redux';

import { IconCollapseExpand } from '@/components';

import { GiYinYang } from 'react-icons/gi';
import { VscCalendar, VscHome } from 'react-icons/vsc';
import { BsChatSquareDots } from 'react-icons/bs';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { Button, List } from 'chansencode-lib';

import css from './Footer.module.scss';

import { logoutUser } from '@/actions';

const Footer = ({ meta, setMeta, className }) => {
  const dispatch = useDispatch();

  function onLogOut() {
    dispatch(logoutUser());
    setMeta({
      ...meta,
      username: '',
    });
    window.localStorage.removeItem('auth-token');
  }

  return (
    <footer className={`${css.footer} ${className}`}>
      <List className={css.styleMenu}>
        <Button onClick={() => setMeta({ ...meta, darkmode: !meta.darkmode })}>
          <GiYinYang />
        </Button>
      </List>
      <List className={css.settingsMenu}>
        <NavLink activeColor={meta.sc} href="/">
          <VscHome color={meta.pc} />
        </NavLink>

        <NavLink activeColor={meta.sc} href="/users">
          <AiOutlineUserAdd color={meta.pc} />
        </NavLink>

        <NavLink activeColor={meta.sc} href="/planning">
          <VscCalendar color={meta.pc} />
        </NavLink>

        <NavLink activeColor={meta.sc} href="/chat">
          <BsChatSquareDots color={meta.pc} />
        </NavLink>
      </List>

      <List className={`${css.functionMenu} ${!meta.showNav && css.collapsed}`}>
        <Button text="Log out" onClick={onLogOut} />
        <Button onClick={() => setMeta({ ...meta, showNav: !meta.showNav })}>
          <IconCollapseExpand ternary={meta.showNav} />
        </Button>
      </List>
    </footer>
  );
};

export default Footer;
