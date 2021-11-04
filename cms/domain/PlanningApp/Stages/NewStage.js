import css from "./Stages.module.scss";

const NewStage = ({ onClick }) => {
  return (
    <div className={css.newStage} onClick={onClick}>
      <p>+ Stage</p>
    </div>
  );
};

export default NewStage;
