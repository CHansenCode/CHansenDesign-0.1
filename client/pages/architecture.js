import Image from 'next/image';

import { Section } from 'chansencode-lib';

const architecture = ({ colors }) => {
  return (
    <>
      <Section center>
        <h2>Animation</h2>
      </Section>

      <Section center>
        <div
          style={{
            position: 'relative',
            height: '200px',
            width: '200px',
            overflow: 'hidden',
          }}
        ></div>
      </Section>

      <Section title="Gallery"></Section>

      <Section center>header</Section>
    </>
  );
};

export default architecture;
