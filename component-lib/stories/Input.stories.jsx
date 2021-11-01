import React from 'react';

import { Input } from '../components';

export default {
  title: 'CHansenCode/Form-with-live-validator/input',
  component: Input,
};

const Template = args => <Input {...args} />;

export const Input = Template.bind({});

Input.args = {
  valid: false,
};
