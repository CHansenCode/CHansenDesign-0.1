import { useState, useEffect } from 'react';

import { Section, Button, Form, Item, List } from 'chansencode-lib';
import { Hamburger } from '@/components';
import { Input } from '../dist/index.es';

export default function Home() {
  const [ternary, setTernary] = useState(false);
  return (
    <>
      <Section center>
        <Hamburger
          ternary={ternary}
          size="3rem"
          onClick={() => setTernary(!ternary)}
        />
      </Section>
      <Section>
        <Button text="Ternary Operator" onClick={() => setTernary(!ternary)} />
        {ternary ? 'true' : 'false'}
      </Section>
      <Section column center>
        <Form>
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
