import css from './Header.module.scss';

export const Header = ({ setView, activeId }) => {
  return (
    <div className={css.header}>
      <h4>Ich bin header</h4>
      {activeId}
      <div>filter</div>
      <div>
        <button onClick={() => setView('list')}>List view</button>
        <button onClick={() => setView('thumb')}>Thumb view</button>
      </div>
    </div>
  );
};
