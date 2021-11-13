import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers';

import { ifItsDark } from '@/utils';

import Layout from '../Layout/Layout';

import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  //
  const [meta, setMeta] = useState({
    username: '',
    isAuthenticated: false,
    darkmode: true,
    pc: 'rgb(65,170,190)',
    sc: 'rgb(245,160,145)',
    pcDark: 'rgb(65,170,190)',
    scDark: 'rgb(245,160,145)',
    showNav: true,
    navWidth: '14rem',
    bg: 'linear-gradient(10deg, rgba(252,252,252,1) 0%, rgba(245,245,245,1) 100%)',
    bgDark:
      'linear-gradient(10deg, rgba(30,40,50,1) 0%, rgba(20,30,40,1) 100%)',
  });

  // useEffect(() => {
  //   let itsDark = ifItsDark();
  //   !itsDark
  //     ? setMeta({ ...meta, darkmode: true })
  //     : setMeta({ ...meta, darkmode: false });
  // }, []);

  const store = createStore(reducers, compose(applyMiddleware(thunk)));

  return (
    <>
      <Provider store={store}>
        <Layout meta={meta} setMeta={setMeta}>
          <Component meta={meta} setMeta={setMeta} {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
