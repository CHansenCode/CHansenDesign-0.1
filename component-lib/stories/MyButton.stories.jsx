import React from 'react';

import { Button } from '../components';

export default {
  title: 'CHansenCode/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Foo = Template.bind({});

Foo.args = {
  text: 'foo',
};
