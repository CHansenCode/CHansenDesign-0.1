import { useState } from 'react';

import '../styles/style.scss';

import Layout from '../Layout/Layout';

function MyApp({ Component, pageProps }) {
  const [colors, setColors] = useState({
    primary: 'rgb(65,170,190)',
    secondary: 'rgb(245,160,145)',
  });
  return (
    <>
      <Layout colors={colors}>
        <Component colors={colors} {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
