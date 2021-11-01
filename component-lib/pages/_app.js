import { useState, useEffect } from 'react';

import '../styles/style.scss';

import Layout from '../Layout/Layout';

function MyApp({ Component, pageProps }) {
  const [colors, setColors] = useState({
    primary: { r: 0, g: 100, b: 100, a: 1 },
    secondary: { r: 100, g: 50, b: 50, a: 1 },
    primaryString: 'rgba(0,100,100,1)',
    secondaryString: 'rgba(100,50,50,1)',
  });

  //#region listen to color changes & update string
  useEffect(() => {
    setColors({
      ...colors,
      primaryString: `rgba(${colors.primary.r}, ${colors.primary.g}, ${colors.primary.b}, ${colors.primary.a})`,
    });
  }, [colors.primary]);
  useEffect(() => {
    setColors({
      ...colors,
      secondaryString: `rgba(${colors.secondary.r}, ${colors.secondary.g}, ${colors.secondary.b}, ${colors.secondary.a})`,
    });
  }, [colors.secondary]);
  //#endregion

  return (
    <>
      <Layout colors={colors} setColors={setColors}>
        <Component colors={colors} {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
