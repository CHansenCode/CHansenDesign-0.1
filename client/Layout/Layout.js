import Head from 'next/head';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import css from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Storybook-Next.js-template</title>
        <meta name="description" content="template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header className={css.header} />
      <main className={css.main}>{children}</main>
      <Footer className={css.footer} />
    </>
  );
};

export default Layout;
