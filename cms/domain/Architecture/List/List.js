import { useSelector } from "react-redux";

import ListItem from "./ListItem";

import css from "./List.module.scss";

const List = ({ activeId, setActiveId, options, setOptions }) => {
  const projects = useSelector((state) => state.archProjects);
  return (
    <>
      <h3 className={css.title}>i am list</h3>
      <div className={css.list}>
        {projects &&
          projects.map((project, i) => (
            <ListItem key={project._id} data={project} onClick={(e) => setActiveId(project._id)} />
          ))}

        <button onClick={(e) => setOptions({ ...options, creatingNew: true })}>+ Create new project</button>
      </div>
    </>
  );
};

export default List;
