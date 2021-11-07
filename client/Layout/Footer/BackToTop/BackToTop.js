import { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

import css from './BackToTop.module.scss';

const BackToTop = ({ colors }) => {
  const [hovered, setHovered] = useState(false);
  let scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div
      className={css.container}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => scrollToTop()}
      style={{ color: hovered ? colors && colors.secondary : colors.primary }}
    >
      <FaChevronUp size="2rem" fill="transparent" />
      <FaChevronUp size="2rem" fill="transparent" />
      <h4>back to top</h4>
    </div>
  );
};

export default BackToTop;
