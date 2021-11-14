import { ListHeader, List, Item } from './';

import css from './View.module.scss';

export const View = ({ meta, data, view, setActiveId }) => {
  return (
    <div className={`${css.main}`}>
      <ListHeader meta={meta} view={view} />

      <List meta={meta} view={view}>
        {data.map((post, i) => (
          <Item
            meta={meta}
            key={post._id}
            view={view}
            data={post}
            onClick={() => setActiveId(post._id)}
          />
        ))}
      </List>
    </div>
  );
};
