import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { FaCloudShowersHeavy } from 'react-icons/fa';

export const NextLink = ({ href, exact, activeColor, children, ...props }) => {
  const { pathname } = useRouter();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += ' active';
  }

  const propStyle = {
    color: isActive ? activeColor : 'currentColor',
  };

  return (
    <Link href={href}>
      <a {...props} style={{ ...inline, ...propStyle }}>
        {children}
      </a>
    </Link>
  );
};

const inline = {
  textDecoration: 'none',
  color: 'currentColor',
};

NextLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NextLink.defaultProps = {
  exact: false,
};
