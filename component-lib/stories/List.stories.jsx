import React from 'react';

import { List, Item } from '../components';

export default {
  title: 'CHansenCode/List',
  component: List,
};

const Template = args => (
  <List {...args}>
    <Item text="cow" />
    <Item text="ListItem 2" />
    <Item text="cow" />
    <Item text="cow" />
  </List>
);

export const issi = Template.bind({});

issi.args = {
  horizontal: false,
};
