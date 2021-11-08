import css from './Button.module.scss';

const Button = ({ text, padding, margin, onClick, className, children }) => {
  const propStyles = {
    padding: padding,
    margin: margin,
  };
  return (
    <button
      className={`${css.button} ${className}`}
      style={propStyles}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
