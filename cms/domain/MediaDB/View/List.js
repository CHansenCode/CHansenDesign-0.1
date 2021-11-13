import css from './List.module.scss';

export const List = ({ meta, children, view }) => {
  let activeView;

  if (view === 'thumb') {
    activeView = css.thumbView;
  } else {
    activeView = css.listView;
  }

  return <ul className={`${css.list} ${activeView}`}>{children}</ul>;
};
