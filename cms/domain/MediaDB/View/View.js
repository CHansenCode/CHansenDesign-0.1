import { ListHeader, List, Item } from './';

import css from './View.module.scss';

import ObjectViewer from '@/components/ObjectViewer/ObjectViewer';

export const View = ({ meta, data, view, setActiveId, formData }) => {
  function sortBy(e) {
    e.preventDefault();
  }

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
      <ObjectViewer data={formData} />
    </div>
  );
};
