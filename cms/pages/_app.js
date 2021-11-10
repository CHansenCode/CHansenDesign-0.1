import { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers';

import Layout from '../Layout/Layout';

import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  //
  const [meta, setMeta] = useState({
    username: '',
    isAuthenticated: false,
    pc: 'rgb(65,170,190)',
    sc: 'rgb(245,160,145)',
  });

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
