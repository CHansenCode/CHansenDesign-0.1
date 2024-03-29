import css from "./Loading.module.scss";

const Loading = ({ text }) => {
  return (
    <div className={css.loadingContainer}>
      <h3 className={css.text}>{text ? text : "loading"}</h3>

      <h5 className={css.dotOne}>o</h5>
      <h5 className={css.dotTwo}>o</h5>
      <h5 className={css.dotThree}>o</h5>
      <h5 className={css.dotFour}>o</h5>
    </div>
  );
};

export default Loading;
