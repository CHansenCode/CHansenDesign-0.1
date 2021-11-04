import React from 'react';

import { useState } from 'react';

export const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  function onMouseEnter() {
    setOpen(true);
  }
  function onMouseLeave() {
    setOpen(false);
  }

  const propStyle = {
    list: {
      height: open ? 'auto' : '1px',
      opacity: open ? 1 : 0,
      padding: open ? '0.5rem 0' : 0,
    },
  };

  return (
    <>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={() => setOpen(!open)}
        style={{ ...inline.wrapper, ...propStyle.wrapper }}
      >
        <div style={inline.menuButton}>
          Components <span style={inline.arrow}>^</span>
        </div>

        <div style={{ ...inline.list, ...propStyle.list }}>
          {children.map((child, i) => (
            <li key={`${i}dropdown`} style={inline.item} key={`menuItem${i}`}>
              {child}
            </li>
          ))}
        </div>

        {/* Pseudo for animation */}
        <div style={{ ...inline.list, ...propStyle.list }}>
          {children.map((child, i) => (
            <li style={inline.item}>{child}</li>
          ))}
        </div>
      </div>
    </>
  );
};

const inline = {
  wrapper: {
    position: 'relative',
    display: 'flex',
    width: 'min-content',
  },
  menuButton: {
    height: '100%',
    width: '100%',

    padding: '0 1rem',
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontWeight: 501,
  },
  list: {
    position: 'absolute',
    top: '100%',
    left: '0',

    width: '100%',

    cursor: 'pointer',

    overflow: 'hidden',
    transition: '0.3s ease',

    backgroundColor: '#fff',
  },
  item: {
    padding: '0 1rem',
  },
  arrow: {
    marginLeft: '0.5rem',
    transform: 'rotate(180deg)',
  },
};
