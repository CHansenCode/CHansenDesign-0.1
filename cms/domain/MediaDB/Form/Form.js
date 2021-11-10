import { useState } from 'react';

import { Input, Textarea } from '@/components';
import { Button } from 'chansencode-lib';
import { AiOutlineExpandAlt } from 'react-icons/ai';

import { meta, formConstructor } from '../config';

import css from './Form.module.scss';

export const Form = ({
  formData,
  setFormData,
  activeId,
  onClose,
  handleSubmit,
}) => {
  return (
    <form className={css.form} onSubmit={e => e.preventDefault()}>
      <header className={css.header}>
        <div className={css.title}>
          <h3 className={css.title}>{meta.title}</h3>
          <br />
          <p>
            {activeId ? (
              <div style={{ display: 'flex' }}>
                Editing: <h4>{formData.title}</h4>
              </div>
            ) : (
              <div style={{ display: 'flex' }}>Creating new post:</div>
            )}
          </p>
          <p>{activeId && activeId}</p>
        </div>
        <div className={css.image}>{activeId && <img src={'#'} alt="" />}</div>
      </header>

      <div>
        {formConstructor.basic.map((constructor, i) => (
          <InputField
            key={`form${constructor.key}${i}`}
            constructor={constructor}
            formData={formData}
            setFormData={setFormData}
          />
        ))}
      </div>

      <Fold>
        {formConstructor.advanced.map((construct, i) => (
          <InputField
            key={`form${construct.key}${i}`}
            constructor={construct}
            formData={construct}
            setFormData={setFormData}
          />
        ))}
      </Fold>

      <footer className={css.saveButton}>
        {activeId ? (
          <Button text="Save changes to existing Post" onClick={handleSubmit} />
        ) : (
          <Button text="+ Create new Media Post" onClick={handleSubmit} />
        )}
      </footer>
    </form>
  );
};

const InputField = ({ constructor, formData, setFormData }) => {
  switch (constructor.type) {
    case 'input':
      return (
        <Input
          label={constructor.label}
          infoOnHover={constructor.infoHover}
          value={formData[constructor.key]}
          onChange={e =>
            setFormData({ ...formData, [constructor.key]: e.target.value })
          }
        />
      );
    case 'textarea':
      return (
        <Textarea
          label={constructor.label}
          infoOnHover={constructor.infoHover}
          value={formData[constructor.key]}
          rows={constructor.rows}
          onChange={e =>
            setFormData({ ...formData, [constructor.key]: e.target.value })
          }
        />
      );
    case 'password':
      return <Input type="password" />;
    case 'select':
      return (
        <div>
          <Button text="select" />
        </div>
      );
    default:
      <Input
        label={constructor.label}
        infoOnHover={constructor.infoHover}
        value={formData[constructor.key]}
        onChange={e =>
          setFormData({ ...formData, [constructor.key]: e.target.value })
        }
      />;
  }
};

const Fold = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={`${css.foldable} ${show && css.foldable_open}`}>
      <Button>
        <h5>Additional options:</h5>
        <AiOutlineExpandAlt />
      </Button>
      {children}
    </div>
  );
};
