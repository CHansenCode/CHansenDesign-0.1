import { useState } from 'react';
import { useSelector } from 'react-redux';

import ObjectViewer from '../../components/ObjectViewer/ObjectViewer';

import css from './Dev.module.scss';

const Dev = () => {
  const [show, setShow] = useState(false);
  const store = useSelector(state => state);
  return (
    <>
      <div className={css.button}>
        <button onClick={() => setShow(!show)}>{'>'}</button>
      </div>

      <div className={`${css.outerDiv} ${show ? css.outerDiv_open : null}`}>
        <div className={css.innerDiv}>
          <ObjectViewer data={store} />
        </div>
      </div>
    </>
  );
};

export default Dev;
