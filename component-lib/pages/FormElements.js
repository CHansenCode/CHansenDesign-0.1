import React, { useState, useEffect } from 'react';

import { Section, Button, Form } from 'chansencode-lib';
import { Input, Textarea } from '../components';

const FormElements = () => {
  return (
    <Section>
      <Form title="Contact Form">
        <Input onChange={e => e.preventDefault()} />
        <Textarea />
        <div>
          <Button text="cow" />
          <Button text="cow" />
        </div>
      </Form>
    </Section>
  );
};

export default FormElements;
