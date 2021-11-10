import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import Footer from './Footer/Footer';
import Lists from './Lists/Lists';
import Header from './Header/Header';

import Image from '../../components/Image/Image';
import { Button } from 'chansencode-lib';

//STYLE
import css from './Nav.module.scss';

//ACTIONS
import { logoutUser } from '../../actions/auth.actions';

//COMPONENT
const Nav = ({ meta, setMeta }) => {
  const dispatch = useDispatch();

  let loggedIn = useSelector(state => state.auth.user);

  function onClickLogOut(dispatch, setMeta) {
    dispatch(logoutUser());
    setMeta({
      ...meta,
      username: '',
    });
  }

  return (
    <header
      className={`${css.header} ${!meta.username && css.header_loggedOut}`}
    >
      <nav className={`${css.nav}`}>
        <Header>
          <Image src="https://media.chansen.design/logo.jpg" />
        </Header>

        <Lists />

        <Footer>
          <Button
            text="Log out"
            onClick={() => onClickLogOut(dispatch, setMeta)}
          />
        </Footer>
      </nav>
    </header>
  );
};

export default Nav;

// style={meta.username ? { left: "0" } : { left: "-16rem" }}
