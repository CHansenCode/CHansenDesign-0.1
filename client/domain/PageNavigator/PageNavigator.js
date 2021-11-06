import css from './PageNavigator.module.scss';

import { List, Item } from 'chansencode-lib';

export const PageNavigator = () => {
  return (
    <div className={css.wrapper}>
      <List>
        <Item>hello</Item>
        <Item>hello</Item>
        <Item>hello</Item>
        <Item>hello</Item>
        <Item>hello</Item>
      </List>
    </div>
  );
};
