import Image from 'next/image';

import { Section } from 'chansencode-lib';
import Gallery from '../domain/Gallery';

import { PageNavigator } from '../domain/PageNavigator';

const architecture = ({ colors }) => {
  return (
    <>
      <div className="main_>_nth_1st_padding-top" />
      {/* Fixed */}

      <PageNavigator />

      {/* Page */}
      <Section center>
        <h2>Animation</h2>
      </Section>

      <Section title="Way of working" center></Section>

      <Section title="Gallery">
        <Gallery />
      </Section>

      <Section center>header</Section>
    </>
  );
};

export default architecture;
