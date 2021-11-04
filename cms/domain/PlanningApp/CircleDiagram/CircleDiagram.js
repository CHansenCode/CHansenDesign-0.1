const CircleDiagram = ({ percentage, size, onClick }) => {
  const iStyle = {
    position: "relative",
    pointerEvents: "all",
    height: size ? size : "2rem",
    width: size ? size : "2rem",
  };
  const circle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    border: "solid currentColor",
    borderRadius: "50%",
    boxShadow: "inset 0 0 3rem -2rem currentColor",
  };
  return (
    <div onClick={onClick} style={iStyle}>
      <div style={circle}>
        <p>{percentage}</p>
      </div>
    </div>
  );
};

export default CircleDiagram;
