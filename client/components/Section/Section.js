export const Section = ({ children, center }) => {
  const propStyle = {
    display: 'flex',
    alignItems: center && 'center',
    justifyContent: center && 'center',
    width: '100%',
  };
  return <section style={propStyle}>{children}</section>;
};
