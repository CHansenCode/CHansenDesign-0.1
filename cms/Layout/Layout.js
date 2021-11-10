import { useEffect } from 'react';
import { useRouter } from 'next/router';

import jwtDecode from 'jwt-decode';

import Head from 'next/head';
import Nav from './Nav/Nav';
import Dev from './Dev/Dev';

import { useDispatch } from 'react-redux';

import siteSettings from '../config/siteSettings.json';
import { SET_CURRENT_USER } from '../actions/actionTypes';

import css from './Layout.module.scss';

const Layout = ({ meta, setMeta, children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  let currentRoute = router.pathname;

  useEffect(() => {
    let localToken = window.localStorage.getItem('jwtToken');
    if (localToken) {
      let decoded = jwtDecode(localToken);
      setMeta({ ...meta, username: decoded.username });
    } else {
      return;
    }
  }, [currentRoute]);

  useEffect(() => {
    dispatch({ type: SET_CURRENT_USER, payload: meta.username });
  }, [meta]);

  return (
    <>
      <Dev />
      <Head>
        <title>{siteSettings.headTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav meta={meta} setMeta={setMeta} route={currentRoute} />
      <main className={!meta.username ? css.loggedOut : null}>{children}</main>
    </>
  );
};

export default Layout;
