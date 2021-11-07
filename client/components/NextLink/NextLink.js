import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { FaCloudShowersHeavy } from 'react-icons/fa';

export const NextLink = ({
  href,
  exact,
  activeColor,
  boxShadow,
  children,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  const { pathname } = useRouter();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += ` active`;
  }

  const propStyle = {
    color: isActive || hovered ? activeColor : 'currentColor',
    boxShadow:
      boxShadow && isActive
        ? 'inset -1rem -1rem 3rem -1.8rem currentColor'
        : null,
  };

  return (
    <Link href={href}>
      <a
        {...props}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ ...inline, ...propStyle }}
      >
        {children}
      </a>
    </Link>
  );
};

const inline = {
  textDecoration: 'none',
  color: 'currentColor',
};

NextLink.defaultProps = {
  exact: false,
};
