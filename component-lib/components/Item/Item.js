import React from 'react';

export const Item = ({ text, children }) => {
  return (
    <li style={{ ...inline }}>
      {text}
      {children}
    </li>
  );
};

const inline = {
  listStyle: 'none',
  whiteSpace: 'nowrap',
};
