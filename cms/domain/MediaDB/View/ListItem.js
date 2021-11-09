import { listView, thumbView } from '../config';

import css from './View.module.scss';

export const ListItem = ({ data, view, onClick }) => {
  switch (view) {
    case 'list':
      return (
        <li className={css.li} onClick={onClick}>
          {listView.map((li, i) => (
            <h5
              key={`${li.key}${i}`}
              className={`${css.keyValue} ${li.key === 'title' && css.title}`}
            >
              {data[li.key]}
            </h5>
          ))}
        </li>
      );
    case 'thumb':
      return (
        <li className={css.li} onClick={onClick}>
          {thumbView.map((li, i) => (
            <h5
              key={`${li.key}${i}`}
              className={`${css.keyValue} ${li.key === 'title' && css.title}`}
            >
              {data[li.key]}
            </h5>
          ))}
        </li>
      );
    default:
      return (
        <li className={css.li} onClick={onClick}>
          {listView.map((li, i) => (
            <h5
              key={`${li.key}${i}`}
              className={`${css.keyValue} ${li.key === 'title' && css.title}`}
            >
              {data[li.key]}
            </h5>
          ))}
        </li>
      );
  }
};
