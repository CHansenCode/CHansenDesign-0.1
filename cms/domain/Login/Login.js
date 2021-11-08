import { useState } from 'react';

import { Form, Input, Textarea } from '@/components';
import { Logo } from 'chansencode-lib';

export const Login = () => {
  const [formData, setFormdata] = useState({
    name: '',
    password: '',
  });
  return (
    <Form>
      <Input />
      <Input />
    </Form>
  );
};
