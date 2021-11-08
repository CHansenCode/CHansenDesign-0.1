import React from 'react';

import css from './Button.module.scss';

export const Button = ({
  text,
  fontSize,
  padding,
  margin,
  noClick,
  onClick,
  type,
  children,
}) => {
  const propStyle = {
    margin: margin,
    padding: padding,
    fontSize: fontSize,
    border: 'thin solid currentColor',
    pointerEvents: noClick && 'none',
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
      {children}
      {text}
      {!children && !text && 'Empty props'}
    </button>
  );
};

Button.defaultProps = {
  fontSize: '16px',
  padding: '0.5rem 0.75rem',
  margin: '0',
};
