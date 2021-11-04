import css from "./Iframe.module.scss";

const IFrame = ({ src, height, width }) => {
  const propStyle = {
    wrapper: {
      height: height,
      width: width,
    },
  };
  return (
    <div style={propStyle.wrapper}>
      <iframe src={src} height="100%" width="100%" />
    </div>
  );
};

export default IFrame;
