import { listView } from '../config';
import { Button } from 'chansencode-lib';

import { AiOutlineSortDescending } from 'react-icons/ai';

import css from './ListHeader.module.scss';

export const ListHeader = ({ meta, view }) => {
  let activeView;

  if (view === 'thumb') {
    activeView = css.header_thumbView;
  } else {
    activeView = css.header_listView;
  }

  const propStyle = {
    color: meta.darkmode ? meta.scDark : meta.sc,
    gridTemplateColumns: view === 'list' && `repeat(${listView.length}, 1fr)`,
  };

  return (
    <header style={propStyle} className={`${css.header} ${activeView}`}>
      {listView.map(item => (
        <div key={`${item.key}listHdr`} className={css.key_sortation}>
          <h5>{item.key}</h5>
          <AiOutlineSortDescending />
        </div>
      ))}
    </header>
  );
};
