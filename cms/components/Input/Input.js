import css from "./Input.module.scss";

const Input = ({ label, placeholder, id, className, value, type, onChange, info }) => {
  return (
    <div className={`${css.container} ${className}`}>
      {label && <h6 className={css.label}>{label} :</h6>}

      <input id={id} placeholder={placeholder} onChange={onChange} value={value} type={type} />

      {info && info.length > 0 ? (
        <div className={css.onHover}>
          <h5>i</h5>
          <span>{info}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Input;
