import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ERROR_HANDLER_MODAL } from '../../actions/actionTypes';

import css from './ErrorMessage.module.scss';

export const ErrorMessage = ({ meta }) => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);

  const errorMessage = useSelector(state => state.errorHandler.modal);

  useEffect(() => {
    setHasError(errorMessage);
  }, [errorMessage]);

  const propStyle = {
    wrapper: {
      color: meta.sc,
      background: meta.darkmode ? meta.bgDark : meta.bg,
    },
    text: {
      color: meta.sc,
    },
    icon: {
      color: meta.sc,
    },
  };

  return (
    <div
      style={propStyle.wrapper}
      className={`${css.fixed} ${errorMessage && css.hasError}`}
    >
      <button
        style={propStyle.icon}
        className={css.icon}
        onClick={() => dispatch({ type: ERROR_HANDLER_MODAL, payload: '' })}
      >
        X
      </button>

      <p style={propStyle.text} className={css.text}>
        {errorMessage}
      </p>
    </div>
  );
};
