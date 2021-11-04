import { useState } from "react";

const InfoOnHover = ({ children, text, size }) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  const hoverToggle = {
    opacity: hover ? "1" : "0",
  };

  const propStyle = {
    height: size,
    width: size,
  };

  return (
    <div style={{ ...iStyle.wrapper, ...propStyle }}>
      <div style={iStyle.symbol} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        ?
      </div>

      <div style={{ ...iStyle.hiddenDiv, ...hoverToggle }}>
        <h6>{text}</h6>
        {children}
      </div>
    </div>
  );
};

const iStyle = {
  wrapper: {
    position: "relative",
    border: "thin solid currentColor",
    borderRadius: "50%",
  },

  symbol: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  hiddenDiv: {
    position: "absolute",
    zIndex: "10",
    top: "125%",
    left: "0",

    height: "min-content",
    minWidth: "17rem",
    maxWidth: "90vw",

    padding: "0.5rem",

    backgroundColor: "#fff",
    border: "thin solid currentColor",

    pointerEvents: "none",
    transition: "0.2s ease",
  },
};

InfoOnHover.defaultProps = {
  size: "1.25rem",
};

export default InfoOnHover;
