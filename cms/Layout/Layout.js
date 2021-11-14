import { useEffect } from 'react';

import Head from 'next/head';
import Nav from './Nav/Nav';
import Dev from './Dev/Dev';
import Main from './Main';
import { ClientOnly } from '@/components';
import { Login } from '@/domain';
import { ErrorMessage } from '@/domain';

import { userValidation, axiosConfig } from '@/utils';

import { siteMeta } from '../config';

import css from './Layout.module.scss';

const Layout = ({ meta, setMeta, children }) => {
  //services
  userValidation();
  axiosConfig();

  const propStyle = {
    main: {
      marginLeft: meta.showNav ? meta.navWidth : '0rem',
      color: meta.darkmode ? meta.pcDarkmode : meta.pc,
      background: meta.darkmode ? meta.bgDark : meta.bg,
      width: meta.showNav ? `calc(100vw - ${meta.navWidth})` : `100vw`,
    },
  };

  return (
    <>
      <Head>
        <title>{siteMeta.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* modals */}
      <ErrorMessage meta={meta} />

      <ClientOnly>
        <Nav meta={meta} setMeta={setMeta} />
        <Main style={propStyle.main} className={css.main}>
          {children}
        </Main>
        <Login />
      </ClientOnly>

      {process.env.NODE_ENV === 'development' && (
        <Dev meta={meta} setMeta={setMeta} />
      )}
    </>
  );
};

export default Layout;
