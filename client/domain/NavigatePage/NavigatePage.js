import css from './NavigatePage.module.scss';

import { List, Item } from 'chansencode-lib';

const NavigatePage = () => {
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

export default NavigatePage;
