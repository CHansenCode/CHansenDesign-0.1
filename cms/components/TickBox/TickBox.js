import css from "./TickBox.module.scss";

const TickBox = ({ truthyText, falseyText, truthyHover, falseyHover, truthy, onClick }) => {
  return (
    <div className={`${css.main} ${truthy ? css.truthy : css.falsey}`} onClick={onClick}>
      <div>{truthy ? truthyText : falseyText}</div>
      <span>{truthy ? truthyHover : falseyHover}</span>
    </div>
  );
};

export default TickBox;
