import Navlink from '../NavLink/NavLink';
import { List } from 'chansencode-lib';

import css from './Lists.module.scss';

import navSetup from '@/config/navSetup.json';

const Lists = ({ meta }) => {
  return (
    <div className={css.wrapper}>
      {navSetup.map(category => (
        <List className={css.ul} key={category.title}>
          <h4 style={{ color: meta.sc }}>{category.title}</h4>

          {category.subPages.map(page => (
            <Navlink
              key={page.title}
              title={page.title}
              href={page.pageRoute}
              urlBarName={page.urlBarName}
              activeColor={meta.sc}
            />
          ))}
        </List>
      ))}
    </div>
  );
};

export default Lists;
