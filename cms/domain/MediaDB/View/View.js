import { useState } from 'react';

import { Item } from 'chansencode-lib';
import {
  AiOutlineSortDescending,
  AiOutlineSortAscending,
} from 'react-icons/ai';

import { listView, thumbView } from '../config';

import css from './View.module.scss';

export const View = ({ data, view, activeId, setActiveId }) => {
  const [ascending, setAscending] = useState(false);
  //
  const propStyle = {
    display: 'grid',
    gridTemplateColumns: view === 'list' && `repeat(${listView.length}, 1fr)`,
    gridGap: '1rem',
  };

  return (
    <div className={`${css.main}`}>
      <>
        {view === 'list' && (
          <ul
            style={{ ...propStyle }}
            className={`${css.ul} ${css.list_view_header}`}
          >
            {listView.map(item => (
              <ListHeader
                key={item.key}
                text={item.key}
                onClick={e => e.preventDefault()}
              />
            ))}
          </ul>
        )}
      </>

      <ul
        className={`${css.ul} 
        ${view === 'thumb' ? css.ul_thumb_view : css.ul_list_view}`}
      >
        {data.map((post, i) => (
          <ListItem
            key={post._id}
            data={post}
            view={view}
            style={view === 'list' && propStyle}
            //
            onClick={() => setActiveId(post._id)}
          />
        ))}
      </ul>
    </div>
  );
};

const ListHeader = ({ text, onClick, ascending }) => {
  return (
    <Item onClick={onClick}>
      <h5>{text}:</h5>
      {ascending ? <AiOutlineSortDescending /> : <AiOutlineSortAscending />}
    </Item>
  );
};

const ListItem = ({ data, view, style, onClick }) => {
  switch (view) {
    case 'thumb':
      return (
        <li onClick={onClick}>
          {thumbView.map((li, i) =>
            li.key === 'src.url' ? (
              <img src={data[li.key]} key={`${li.key}${i}`} />
            ) : (
              <h5 key={`${li.key}${i}`}>{data[li.key]}</h5>
            ),
          )}
        </li>
      );
    default:
      return (
        <li style={style} onClick={onClick}>
          {listView.map((li, i) => (
            <h5 key={`${li.key}${i}`}>
              {data[li.key]}
              <span />
            </h5>
          ))}
        </li>
      );
  }
};
