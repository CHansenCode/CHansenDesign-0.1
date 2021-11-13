import NewProject from './NewProject';
import { useDispatch } from 'react-redux';

import css from './Projects.module.scss';

import { createPlanning } from '@/actions';

const Projects = ({ children, controller, activeId }) => {
  const dispatch = useDispatch();
  function onClickCreateNewProject() {
    dispatch(createPlanning());
  }
  return (
    <div className={css.projectsWrapper}>
      {children}
      {!controller.isEditing && !activeId && (
        <NewProject onClick={() => onClickCreateNewProject()} />
      )}
    </div>
  );
};

export default Projects;
