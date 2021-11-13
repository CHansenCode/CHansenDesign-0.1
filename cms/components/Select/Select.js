import css from './Select.module.scss';

import { Button } from 'chansencode-lib';

export const Select = ({ constructor, formData, setFormData }) => {
  return (
    <div className={css.select}>
      {constructor.label && <h5>{constructor.label}:</h5>}
      <div className={css.options}>
        {constructor &&
          constructor.options.map((option, i) => (
            <Button
              text={option}
              key={`${option}${i}`}
              onClick={() =>
                formData[constructor.key] === option
                  ? setFormData({ ...formData, [constructor.key]: '' })
                  : setFormData({ ...formData, [constructor.key]: option })
              }
              className={option === formData[constructor.key] && css.selected}
            />
          ))}
      </div>
    </div>
  );
};

export default Select;

const Option = ({ constructor, formData }) => {
  return <Button />;
};
