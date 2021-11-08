import { useState } from 'react';

import Head from 'next/head';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import { Modal } from '@/components';

import css from './Layout.module.scss';

const Layout = ({ colors, setColors, children }) => {
  const [modals, setModals] = useState({
    testModal: false,
  });
  return (
    <>
      <Head>
        <title>Storybook-Next.js-template</title>
        <meta name="description" content="template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal
        ternary={modals.testModal}
        center
        onClose={() => setModals({ ...modals, testModal: false })}
      />

      <Header className={css.header} colors={colors} setColors={setColors} />
      <main className={css.main} style={{ color: colors.primaryString }}>
        {children}
      </main>
      <Footer className={css.footer} />
    </>
  );
};

export default Layout;
