import css from "./Checkbox.module.scss";

const Checkbox = ({ ternary, onClick }) => {
  return (
    <div className={css.checkbox} onClick={onClick}>
      {ternary && <h4 className={css.tick}>✓</h4>}
    </div>
  );
};

export default Checkbox;
