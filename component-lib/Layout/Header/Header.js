import { useState } from 'react';
import { ChromePicker } from 'react-color';

import { Dropdown, NextLink } from '@/components';

import css from './Header.module.scss';

import { pageSetup, meta } from '@/config';

const Header = ({ className, colors, setColors }) => {
  const [isPickingPrimary, setIsPickingPrimary] = useState(false);
  const [isPickingSecondary, setIsPickingSecondary] = useState(false);

  function handlePrimaryChange(color, e) {
    setColors({ ...colors, primary: color.rgb });
  }
  function handleSecondaryChange(color, e) {
    setColors({ ...colors, secondary: color.rgb });
  }

  return (
    <header className={`${className} ${css.header}`}>
      <nav style={{ color: colors.primaryString }}>
        <div
          style={{
            color: colors.primaryString,
            padding: '0 0 0 1rem',
            whiteSpace: 'nowrap',
          }}
        >
          {meta.projectName} - Component library
        </div>
        <Dropdown>
          {pageSetup.map(page => (
            <NextLink href={page.pageRoute}>{page.name}</NextLink>
          ))}
        </Dropdown>
        <div></div>

        <div>
          <ColorPicker
            colorName="Primary"
            color={colors.primaryString}
            onChangeComplete={handlePrimaryChange}
          />
          <ColorPicker
            colorName="Secondary"
            color={colors.secondaryString}
            onChangeComplete={handleSecondaryChange}
          />
        </div>
      </nav>
    </header>
  );
};

const ColorPicker = ({ color, onChangeComplete, colorName }) => {
  const [open, setOpen] = useState(false);
  const propStyle = {
    background: color,
  };
  const inline = {
    height: '1.5rem',
    width: '1.5rem',
    borderRadius: '50%',
    cursor: 'pointer',
    pickerWrapper: {
      position: 'absolute',
      top: '4rem',
      right: '0',
    },
  };
  return (
    <div style={{ marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
      <h5 style={{ margin: '0 0.5rem 0 0', padding: 0, color: color }}>
        {colorName}:
      </h5>
      <div onClick={() => setOpen(!open)} style={{ ...propStyle, ...inline }} />
      <div style={inline.pickerWrapper}>
        {open && (
          <>
            <div onMouseLeave={() => setOpen(false)}>
              <ChromePicker color={color} onChangeComplete={onChangeComplete} />
              <button
                onClick={() => setOpen(!open)}
                style={{
                  marginTop: '0.5rem',
                  cursor: 'pointer',
                  color: color,
                  border: 'thin solid currentColor',
                }}
              >
                close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
