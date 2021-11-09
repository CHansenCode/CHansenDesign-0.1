import { useState } from 'react';

import { ListItem } from './';

import css from './View.module.scss';

export const View = ({ data, view, activeId, setActiveId }) => {
  return (
    <div className={`${css.main}`}>
      <ul
        className={`${css.ul} 
        ${view === 'list' && css.list} ${view === 'thumb' && css.thumb}`}
      >
        {data.map((post, i) => (
          <ListItem
            key={post._id}
            data={post}
            view={view}
            onClick={() => setActiveId(post._id)}
          />
        ))}
      </ul>
    </div>
  );
};
