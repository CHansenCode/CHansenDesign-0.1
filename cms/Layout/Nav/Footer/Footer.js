import NavLink from '../NavLink/NavLink';

import { VscCalendar, VscHome } from 'react-icons/vsc';
import { BsChatSquareDots } from 'react-icons/bs';
import { AiOutlineUserAdd } from 'react-icons/ai';

import css from './navFooter.module.scss';

const Footer = ({ children }) => {
  return (
    <footer className={css.footer}>
      <ul>
        <NavLink hover="Home" href="/landing">
          <VscHome />
        </NavLink>

        <NavLink hover="User settings" href="/users">
          <AiOutlineUserAdd />
        </NavLink>

        <NavLink hover="planning" href="/planning">
          <VscCalendar />
        </NavLink>

        <NavLink hover="InterCOM" href="/chat">
          <BsChatSquareDots />
        </NavLink>
      </ul>
    </footer>
  );
};

export default Footer;
