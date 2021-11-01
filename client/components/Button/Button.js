import React from 'react';

import css from './Button.module.scss';

export const Button = ({ text, fontSize, padding, margin, onClick }) => {
  const propStyle = {
    height: 'auto',
    width: 'auto',
    margin: margin,
    padding: padding,
    fontSize: fontSize,
    outline: 'none',
    border: 'thin solid currentColor',
  };
  return (
    <button onClick={onClick} className={css.button} style={propStyle}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'text/child prop empty',
  fontSize: '16px',
  padding: '0.5rem 0.75rem',
  margin: '0',
};
