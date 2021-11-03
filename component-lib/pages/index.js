import { useState, useEffect } from 'react';

import { Section, Button, Form, Item, List } from 'chansencode-lib';
import { Input } from '../dist/index.es';

export default function Home() {
  return (
    <>
      <Section column center>
        <Button />
        <Form>
          {/* <Input /> */}
          <textarea cols="5" rows="5" />
          <Button text="Send" />
        </Form>

        <List>
          <Item text="text example" />
        </List>
      </Section>
      <Section center></Section>
    </>
  );
}
