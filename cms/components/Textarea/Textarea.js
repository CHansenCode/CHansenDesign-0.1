import css from "./Textarea.module.scss";

const Textarea = ({ label, placeholder, rows, id, className, value, onChange }) => {
  return (
    <div className={`${css.container} ${className}`}>
      {label && <h6 className={css.label}>{label}:</h6>}
      <textarea
        id={id}
        className={css.textarea}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

Textarea.defaultProps = {
  rows: 4,
};

export default Textarea;
