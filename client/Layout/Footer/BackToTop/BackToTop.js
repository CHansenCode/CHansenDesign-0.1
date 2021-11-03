import { FaChevronUp } from 'react-icons/fa';

import css from './BackToTop.module.scss';

const BackToTop = () => {
  let scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className={css.container} onClick={() => scrollToTop()}>
      <button>
        <FaChevronUp size="2rem" />
        <FaChevronUp size="2rem" />
        <h4>back to top</h4>
      </button>
    </div>
  );
};

export default BackToTop;
