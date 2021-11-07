import { useState } from 'react';
import { NextLink } from '@/components/NextLink';

import {
  sitemap,
  cookiePolicy,
  dataHandling,
  legal,
} from '../../../config/index';

import css from './Sitemap.module.scss';

const Sitemap = ({ colors }) => {
  return (
    <ul className={css.ul}>
      <div>
        <h5
          style={{
            color: colors.secondary,
            fontWeight: 400,
            marginLeft: '0.25rem',
          }}
        >
          SITEMAP
        </h5>
        {sitemap
          ? sitemap.map((link, i) => (
              <NextLink
                activeColor={colors.secondary}
                key={`${link.title}${i}`}
                href={link.route}
              >
                <li>{link.title}</li>
              </NextLink>
            ))
          : 'Please provide an array of links to Sitemap component'}
      </div>
      <div>
        <h5
          style={{
            color: colors.secondary,
            fontWeight: 400,
            marginLeft: '0.25rem',
          }}
        >
          LEGAL
        </h5>
        <OnHover text="Cookie policy" hover={cookiePolicy} colors={colors} />
        <OnHover text="Data handling" hover={dataHandling} colors={colors} />
        <OnHover text="Legal" hover={legal} colors={colors} />
      </div>
    </ul>
  );
};

export default Sitemap;

const OnHover = ({ text, hover, colors }) => {
  const [hovered, setHovered] = useState(false);
  const inline = {
    li: {
      color: colors && hovered ? colors.secondary : colors.primary,
    },
    hover: {
      display: hovered ? 'inline-block' : 'none',
      position: 'absolute',
      bottom: '5px',
      right: '5px',

      width: '100%',

      border: 'thin solid',
      padding: '1rem',
    },
  };
  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={inline.li}
    >
      {text}
      <h5 style={inline.hover}>{hover}</h5>
    </li>
  );
};
