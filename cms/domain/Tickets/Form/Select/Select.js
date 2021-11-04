import Button from "../../../../components/Button/Button";

import css from "./Select.module.scss";

const Select = ({ formData, setFormData }) => {
  const SelectComponent = ({ text }) => {
    return (
      <Button
        text={text}
        className={formData.category === text ? css.active : null}
        onClick={(e) => {
          e.preventDefault();
          setFormData({ ...formData, category: text });
        }}
      />
    );
  };
  return (
    <div className={css.select}>
      <h6>{formData && formData.category ? formData.category : "please choose a category"}</h6>
      <SelectComponent text="Bug" />
      <SelectComponent text="Service failure" />
      <SelectComponent text="Connection / server issues" />
      <SelectComponent text="Other..." />
    </div>
  );
};

const Picker = () => {};

export default Select;
