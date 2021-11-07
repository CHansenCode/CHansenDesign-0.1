import { Section, Button } from 'chansencode-lib';
import AnimationCHansen from '../public/AnimatedLogo/AnimationCHansen';

export default function Home() {
  return (
    <>
      <Section margin="0" padding="5vh 0 0 0" center>
        <div
          style={{
            minWidth: '280px',
            maxWidth: '640px',
            width: '100%',
            padding: '0 5rem 0 0',
          }}
        >
          <AnimationCHansen />
        </div>
      </Section>
      <Section center>
        <Button />
      </Section>
    </>
  );
}
