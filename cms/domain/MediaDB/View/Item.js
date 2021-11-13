import { thumbView, listView } from '../config';

import css from './Item.module.scss';

export const Item = ({ meta, data, view, onClick }) => {
  //
  let activeView;
  if (view === 'thumb') {
    activeView = css.item_thumbView;
  } else {
    activeView = css.item_listView;
  }

  return view === 'thumb' ? (
    <ThumbItem data={data} onClick={onClick} />
  ) : (
    <ListItem data={data} onClick={onClick} />
  );
};

const ThumbItem = ({ data, onClick }) => {
  return (
    <li className={`${css.item} ${css.item_thumbView}`} onClick={onClick}>
      {thumbView.map((li, i) => (
        <h5 key={`${li.key}${i}thItem`} className={css.keyValue}>
          {data[li.key]}
        </h5>
      ))}
    </li>
  );
};

const ListItem = ({ data, onClick }) => {
  const propStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${listView.length}, 1fr)`,
  };
  return (
    <li
      style={propStyle}
      className={`${css.item} ${css.item_listView}`}
      onClick={onClick}
    >
      {listView.map((li, i) => (
        <h5 key={`${li.key}${i}liItem`} className={css.keyValue}>
          {data[li.key]}
        </h5>
      ))}
    </li>
  );
};
