const ObjectViewer = ({ data, fontSize, title }) => {
  const stringedData = JSON.stringify(data, null, 4);
  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      <h4 style={{ color: "orange" }}>{title}</h4>
      <p style={{ fontSize: fontSize }}>{stringedData}</p>
    </div>
  );
};

export default ObjectViewer;
