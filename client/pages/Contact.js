import { Section } from 'chansencode-lib';
import ContactForm from '../domain/ContactForm';

const contact = () => {
  return (
    <>
      <Section center>
        <div style={{ width: '40%', margin: '0 20% 0 0' }}>
          <ContactForm />
        </div>
      </Section>
    </>
  );
};

export default contact;
