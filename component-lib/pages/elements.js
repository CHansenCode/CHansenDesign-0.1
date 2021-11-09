import { Section, Button, Input, Textarea } from 'chansencode-lib';
import { Logo } from 'components';

export const Elements = () => {
  return (
    <>
      <Section title="Logo" center>
        <div style={{ height: '100px' }}>
          <Logo height="100%" />
        </div>
      </Section>
      <Section title="Button" center>
        <Button />
      </Section>
    </>
  );
};

export default Elements;
