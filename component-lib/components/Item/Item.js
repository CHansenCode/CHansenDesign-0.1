import React from 'react';

import css from './Item.module.scss';

export const Item = ({ text, id, className, style, children }) => {
  return (
    <li style={{ ...style }} id={id} className={`${css.item} ${className}`}>
      {text}
      {children}
    </li>
  );
};
