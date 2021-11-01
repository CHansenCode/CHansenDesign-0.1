import React from 'react';

import css from './Button.module.scss';

export const Button = ({ text, fontSize, padding, margin, onClick, type }) => {
  const propStyle = {
    margin: margin,
    padding: padding,
    fontSize: fontSize,
    border: 'thin solid currentColor',
  };

  return (
    <button
      onClick={onClick}
      className={`${css.button} ${
        type === 'yellow'
          ? css.yellow
          : type === 'red'
          ? css.red
          : type === 'green'
          ? css.green
          : ''
      }`}
      style={propStyle}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'text prop empty!',
  fontSize: '16px',
  padding: '0.5rem 0.75rem',
  margin: '0',
};
