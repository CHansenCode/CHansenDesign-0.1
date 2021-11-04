import css from "./Input.module.scss";

const Input = ({ value, placeholder, style, className, controller, onChange }) => {
  // * !
  let isEditing = controller && controller.isEditing;

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      //
      style={style}
      className={`${css.input} ${className} ${isEditing && css.isEditing}`}
      //
      onChange={onChange}
    />
  );
};

export default Input;
