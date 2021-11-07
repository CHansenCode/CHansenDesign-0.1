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
        <h6 style={{ paddingLeft: '0.2rem', color: colors.secondary }}>
          sitemap:
        </h6>
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
        <h6 style={{ paddingLeft: '0.2rem', color: colors.secondary }}>
          legal:
        </h6>
        <OnHover text="Cookie policy" hover={cookiePolicy} />
        <OnHover text="Data handling" hover={dataHandling} />
        <OnHover text="Legal" hover={legal} />
      </div>
    </ul>
  );
};

export default Sitemap;

const OnHover = ({ text, hover }) => {
  const [hovered, setHovered] = useState(false);
  const inline = {
    li: {
      position: 'relative',
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
    >
      {text}
      <h5 style={inline.hover}>{hover}</h5>
    </li>
  );
};
