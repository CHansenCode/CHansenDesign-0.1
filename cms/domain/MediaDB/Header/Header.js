import { Button } from 'chansencode-lib';

import css from './Header.module.scss';

export const Header = ({ setView, activeId, setShowForm }) => {
  return (
    <div className={css.header}>
      <h4>Ich bin header</h4>
      {activeId}
      <div>filter</div>
      <div className={css.buttonRow}>
        <Button
          text="List view"
          margin="0 0 0 1rem"
          onClick={() => setView('list')}
        />
        <Button
          text="Thumbnail view"
          margin="0 0 0 1rem"
          onClick={() => setView('thumb')}
        />
      </div>
    </div>
  );
};
