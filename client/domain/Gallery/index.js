import { useState } from 'react';

import css from './Gallery.module.scss';

const Gallery = ({ colors }) => {
  const [page, setPage] = useState(0);
  let left = '<';
  let right = '>';
  return (
    <div
      style={{
        position: 'relative',
        height: '70vh',
        maxWidth: '1200px',
        border: 'thin solid lightgray',
        boxShadow: '0 0 4rem -2.5rem currentColor',
      }}
    >
      <div>{left}</div>
      <div className={css.viewFrame}>
        <img
          className={css.img}
          src="https://media.chansen.design/placeholder.jpg"
          alt=""
        />
      </div>
      <div>{right}</div>
    </div>
  );
};

export default Gallery;
