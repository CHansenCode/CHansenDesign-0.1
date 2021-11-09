import { Input, Textarea } from '@/components';
import { Button } from 'chansencode-lib';

import { meta, formConstructor } from '../config';

import css from './Form.module.scss';

export const Form = ({ formData, setFormData, activeId, onClose }) => {
  function handleSubmit(formData) {}

  return (
    <form className={css.form} onSubmit={e => e.preventDefault()}>
      <header>
        <div>
          <h4 className={css.title}>{meta.title}</h4>
          <Button text="X" onClick={onClose} />
        </div>

        <p>
          {activeId
            ? `Currently editing ${activeId}`
            : 'Creating new Media post'}
        </p>
      </header>

      {formConstructor.map((constructor, i) => (
        <InputField
          key={`form${constructor.key}${i}`}
          constructor={constructor}
        />
      ))}

      <div className={css.actionButtons}>
        {activeId ? (
          <Button text="Save changes" onClick={handleSubmit} />
        ) : (
          <Button text="+ Create new" onClick={handleSubmit} />
        )}

        <Button text="Delete Post" type="red" style={{ color: 'red' }} />
      </div>
    </form>
  );
};

const InputField = ({ constructor }) => {
  switch (constructor.type) {
    case 'input':
      return <Input />;
    default:
      <Input />;
  }
};
