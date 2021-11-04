import css from "./Subtasks.module.scss";

const newSubtask = ({ onClick }) => {
  return (
    <div className={css.newSubtask} onClick={onClick}>
      <h5>+ Subtask</h5>
    </div>
  );
};

export default newSubtask;
