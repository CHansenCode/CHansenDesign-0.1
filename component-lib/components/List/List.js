import React from 'react';

export const List = ({ children, horizontal }) => {
  const propStyle = {
    display: horizontal && 'flex',
  };
  return <ul style={({ ...inline }, { ...propStyle })}>{children}</ul>;
};

const inline = {
  margin: '0',
  padding: '0',
  width: 'min-content',
};
