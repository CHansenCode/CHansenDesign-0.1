import SectionTitle from './SectionTitle/SectionTitle';

const Section = ({
  title,
  myRef,
  minHeight,
  maxWidth,
  padding,
  margin,
  flex,
  column,
  center,
  children,
}) => {
  const propStyling = {
    minHeight: minHeight,
    maxWidth: maxWidth,

    padding: padding,
    margin: margin,

    display: flex && 'flex',
    flexDirection: column && 'column',
    alignItems: center && 'center',
    justifyContent: center && 'center',
  };
  return (
    <section myref={myRef} style={propStyling}>
      {children}
    </section>
  );
};

export default Section;
