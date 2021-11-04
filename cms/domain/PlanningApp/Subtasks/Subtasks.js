import NewSubtask from "./newSubtask";

import uniqueIdGenerator from "../../../utils/uniqueIdGenerator";

import css from "./Subtasks.module.scss";

const Subtasks = ({
  children,
  controller,
  activeId,
  projectData,
  activeProject,
  setActiveProject,
  stageIndex,
  taskIndex,
}) => {
  const onClickCreateSubtask = () => {
    let filteredStages = activeProject.stages.filter((stage) => stage.id !== activeProject.stages[stageIndex].id);
    let filteredTasks = activeProject.stages[stageIndex].tasks.filter(
      (task) => task.id !== activeProject.stages[stageIndex].tasks[taskIndex].id
    );

    let subtaskArray = activeProject.stages[stageIndex].tasks[taskIndex].subtasks;
    let newSubtask = {
      id: uniqueIdGenerator(),
      title: "",
      assignedTo: "",
      timeRemaining: 0,
      resolved: false,
    };
    subtaskArray.push(newSubtask);

    let newTask = { ...activeProject.stages[stageIndex].tasks[taskIndex], subtasks: subtaskArray };
    filteredTasks.splice(taskIndex, 0, newTask);

    let newStage = { ...activeProject.stages[stageIndex], tasks: filteredTasks };
    filteredStages.splice(stageIndex, 0, newStage);

    setActiveProject({ ...activeProject, stages: filteredStages });
  };

  return (
    <div className={css.subtasksWrapper}>
      {children}
      {activeId === projectData.id && controller.isEditing && <NewSubtask onClick={() => onClickCreateSubtask()} />}
    </div>
  );
};

export default Subtasks;
