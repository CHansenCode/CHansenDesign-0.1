import Head from 'next/head';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import css from './Layout.module.scss';

const Layout = ({ colors, setColors, children }) => {
  return (
    <>
      <Head>
        <title>Storybook-Next.js-template</title>
        <meta name="description" content="template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header className={css.header} colors={colors} setColors={setColors} />
      <main className={css.main} style={{ color: colors.primaryString }}>
        {children}
      </main>
      <Footer className={css.footer} />
    </>
  );
};

export default Layout;
