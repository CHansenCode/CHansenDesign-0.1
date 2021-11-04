import { useState } from 'react';
import Head from 'next/head';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import css from './Layout.module.scss';

const Layout = ({ colors, children }) => {
  return (
    <>
      <Head>
        <title>Storybook-Next.js-template</title>
        <meta name="description" content="template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header colors={colors} className={css.header} />
      <main style={{ color: colors.primary }} className={css.main}>
        {children}
      </main>
      <Footer colors={colors} className={css.footer} />
    </>
  );
};

export default Layout;
