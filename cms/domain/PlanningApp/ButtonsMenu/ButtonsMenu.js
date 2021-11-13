import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AiOutlineUnlock, AiOutlineLock, AiOutlineSave } from 'react-icons/ai';
import { FiDelete } from 'react-icons/fi';
import { VscFoldDown } from 'react-icons/vsc';
import { BsCheckCircle } from 'react-icons/bs';

import Button from './Button';

import { updatePlannings } from '@/actions';

import css from './ButtonsMenu.module.scss';

const ButtonsMenu = ({
  controller,
  setController,
  projectData,
  activeId,
  setActiveId,
  activeProject,
  setActiveProject,
  activeCopy,
  setActiveCopy,
  clear,
}) => {
  const dispatch = useDispatch();

  let canEdit =
    activeProject && activeProject.id === projectData.id && controller.canEdit;
  let canResolve =
    activeProject &&
    activeProject.id === projectData.id &&
    controller.canResolveSubtasks;

  const onClickToggleActiveProject = () => {
    projectData.id == activeId ? clear() : setActiveId(projectData.id);
  };

  const onClickActivateEditingMode = () => {
    setController({ ...controller, isEditing: !controller.isEditing });
    setActiveCopy(activeProject);
  };

  const onClickSaveChanges = () => {
    dispatch(updatePlannings(activeProject));
    setController({ ...controller, isEditing: false });
  };
  const onClickDiscardActiveChanges = () => {
    setActiveProject(activeCopy);
    setActiveCopy(''), setController({ ...controller, isEditing: false });
  };

  return (
    <nav className={css.nav}>
      <ul>
        <Button
          hover="View Project Details"
          onClick={e => onClickToggleActiveProject()}
        >
          <VscFoldDown />
        </Button>

        {canEdit && !controller.isEditing && (
          <Button
            onClick={() => onClickActivateEditingMode()}
            hover="Enable editing mode"
          >
            <AiOutlineUnlock />
          </Button>
        )}
        {controller.isEditing && (
          <Button color="green" onClick={() => onClickSaveChanges()}>
            <AiOutlineSave />
          </Button>
        )}
        {controller.isEditing && (
          <Button color="green" onClick={() => onClickDiscardActiveChanges()}>
            <FiDelete />
          </Button>
        )}
        {canResolve && !controller.isEditing && (
          <Button
            onClick={() =>
              setController({
                ...controller,
                isResolvingSubtasks: !controller.isResolvingSubtasks,
              })
            }
            hover="Show all subtasks"
          >
            <BsCheckCircle />
          </Button>
        )}
      </ul>
    </nav>
  );
};

export default ButtonsMenu;
