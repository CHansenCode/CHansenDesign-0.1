import css from "./Modal.module.scss";

const Modal = ({ truthy, onClick, children }) => {
  const iStyle = {
    open: {
      opacity: 1,
      pointerEvents: "all",
    },
    closed: {
      opacity: 0,
      pointerEvents: "none",
    },
  };
  return (
    <div style={truthy ? iStyle.open : iStyle.closed} className={css.modal}>
      <button className={css.closeButton} onClick={onClick} />
      <h5>Click anywhere outside to close - X</h5>
      {children}
    </div>
  );
};

export default Modal;
