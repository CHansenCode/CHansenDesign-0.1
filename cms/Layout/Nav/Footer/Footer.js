import NavLink from '../NavLink/NavLink';

import { VscCalendar, VscHome } from 'react-icons/vsc';
import { BsChatSquareDots } from 'react-icons/bs';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { Button, List } from 'chansencode-lib';

import css from './Footer.module.scss';

const Footer = ({ meta, setMeta, className }) => {
  return (
    <footer className={`${css.footer} ${className}`}>
      <List>
        <NavLink activeColor={meta.sc} href="/landing">
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
      <Button padding="0" margin="0" text="Log out" />
    </footer>
  );
};

export default Footer;
