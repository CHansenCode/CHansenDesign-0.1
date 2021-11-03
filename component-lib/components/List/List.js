import React from 'react';

export const List = ({ margin, padding, className, children, horizontal }) => {
  const propStyle = {
    display: horizontal && 'flex',
    margin: margin,
    padding: padding,
  };

  return (
    <ul className={className} style={({ ...inline }, { ...propStyle })}>
      {children}
    </ul>
  );
};

List.defaultProps = {
  margin: '0',
  padding: '0',
};

const inline = {
  width: 'min-content',
};
