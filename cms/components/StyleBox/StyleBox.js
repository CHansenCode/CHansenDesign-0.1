const StyleBox = ({
  border,
  width,
  padding,
  boxShadow,
  preWrap,
  children,
  title,
  center,
  marginBottom,
}) => {
  const inlineStyle = {
    border: border,
    boxShadow: boxShadow,
    padding: padding,
    width: width,
    whiteSpace: preWrap ? "pre-wrap" : null,
    display: center ? "flex" : null,
    alignItems: center ? "center" : null,
    justifyContent: center ? "center" : null,
    marginBottom: marginBottom,
  };
  return (
    <div style={inlineStyle}>
      {title ? <h4 style={{ marginBottom: "1rem" }}>{title}</h4> : null}
      {children}
    </div>
  );
};

StyleBox.defaultProps = {
  border: "solid",
  boxShadow: "0 0 3rem -2rem currentColor",
  padding: "1rem",
  width: "100%",
};

export default StyleBox;
