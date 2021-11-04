import css from "./ButtonsMenu.module.scss";

const Button = ({ onClick, hover, children, height, width, color }) => {
  const propStyle = {
    height: height ? height : "2rem",
    width: width ? width : "2rem",
    color: color ? color : "currentColor",
  };
  return (
    <button style={propStyle} onClick={onClick} className={css.button}>
      {children}
      <div className={css.hover}>{hover}</div>
    </button>
  );
};

export default Button;
