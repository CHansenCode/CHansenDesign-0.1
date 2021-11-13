import { useState } from 'react';

import { Button } from 'chansencode-lib';
import { InputField } from './';
import { Foldable } from '@/components';

import { formMeta, formConstructor } from '../config';

import css from './Form.module.scss';

export const Form = ({
  meta,
  formData,
  setFormData,
  activeId,
  showForm,
  onClose,
  onCreateNew,
  handleSubmit,
}) => {
  const propStyle = {
    form: {
      background: meta.darkmode ? meta.bgDark : meta.bg,
    },
    showCloseBtn_wrapper: {
      left: activeId || showForm ? '-1rem' : '-10rem',
    },
    showCloseBtn: {
      height: activeId || showForm ? '2rem' : '5rem',
      width: activeId || showForm ? '2rem' : '5rem',
      background: meta.darkmode ? meta.bgDark : meta.bg,
      color: activeId || showForm ? 'red' : 'currentColor',
    },
  };
  return (
    <div className={css.wrapper}>
      <div style={propStyle.showCloseBtn_wrapper} className={css.showCloseBtn}>
        <Button
          style={propStyle.showCloseBtn}
          text={activeId || showForm ? 'X' : '+ New Post'}
          onClick={activeId || showForm ? onClose : onCreateNew}
        />
      </div>

      <div className={css.scrollable}>
        <form
          style={propStyle.form}
          className={css.form}
          onSubmit={e => e.preventDefault()}
        >
          <header className={css.header}>
            <div className={css.title}>
              <h3 className={css.title}>{formMeta.title}</h3>
              <br />
            </div>
          </header>

          <div className={css.basicInput}>
            {formConstructor.basic.map((constructor, i) => (
              <InputField
                key={`basic${constructor.key}${i}`}
                constructor={constructor}
                formData={formData}
                setFormData={setFormData}
              />
            ))}
          </div>

          <Foldable className={css.advanceInput}>
            {formConstructor.advanced.map((constructor, i) => (
              <InputField
                key={`advanced${constructor.key}${i}`}
                constructor={constructor}
                formData={formData}
                setFormData={setFormData}
              />
            ))}
          </Foldable>

          <footer className={css.saveButton}>
            <Button
              text={activeId ? 'Save changes' : '+ Create new'}
              onClick={handleSubmit}
            />
          </footer>
        </form>
      </div>
    </div>
  );
};
