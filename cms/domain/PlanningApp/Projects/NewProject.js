import css from "./Projects.module.scss";

const NewProject = ({ onClick }) => {
  return (
    <div className={css.newProject} onClick={onClick}>
      <p>+ Project</p>
    </div>
  );
};

export default NewProject;
