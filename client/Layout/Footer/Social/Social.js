import { useState } from 'react';
import Link from 'next/link';
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaNpm,
} from 'react-icons/fa';

import css from './Social.module.scss';

import { socialLinks } from '@/config/index';

const Social = ({ colors }) => {
  return (
    <ul className={css.ul}>
      <h5 style={{ color: colors.secondary, fontWeight: 400 }}>SOCIAL LINKS</h5>
      {socialLinks.map((link, i) => (
        <SocialLink
          key={`${link.title}${i}`}
          title={link.title}
          href={link.href}
          type={link.type}
          colors={colors}
        />
      ))}
    </ul>
  );
};

const SocialLink = ({ href, title, type, colors }) => {
  const [hovered, setHovered] = useState(false);
  return href.length > 0 ? (
    <Link href={href}>
      <a className={css.a} target="_blank">
        <li
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ color: hovered ? colors.secondary : colors.primary }}
          className={css.li}
        >
          <Icon type={type} />
          {title}
        </li>
      </a>
    </Link>
  ) : null;
};

const Icon = ({ type }) => {
  switch (type) {
    case 'github':
      return <FaGithub />;
    case 'linkedin':
      return <FaLinkedin />;
    case 'instagram':
      return <FaInstagram />;
    case 'facebook':
      return <FaFacebook />;
    case 'npm':
      return <FaNpm />;
    default:
      break;
  }
};

export default Social;
