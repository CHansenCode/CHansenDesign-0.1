import css from "./Tasks.module.scss";

const NewTask = ({ onClick }) => {
  return (
    <div className={css.newTask} onClick={onClick}>
      <h5>+ Task</h5>
    </div>
  );
};

export default NewTask;
