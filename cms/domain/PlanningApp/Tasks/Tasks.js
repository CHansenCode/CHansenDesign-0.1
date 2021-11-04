import NewTask from "./NewTask";

import css from "./Tasks.module.scss";

import uniqueIdGenerator from "../../../utils/uniqueIdGenerator";

const Tasks = ({ children, controller, projectData, activeId, activeProject, setActiveProject, stageIndex }) => {
  const onClickCreateTask = () => {
    let filteredStages = activeProject.stages.filter((stage) => stage.id !== activeProject.stages[stageIndex].id);

    let taskArray = activeProject.stages[stageIndex].tasks;
    let newTask = {
      id: uniqueIdGenerator(),
      title: "",
      v: "",
      deadline: "",
      subtasks: [
        {
          id: uniqueIdGenerator(),
          name: "",
          assignedTo: [],
          timeRemaining: 0,
          resolved: false,
        },
      ],
    };
    taskArray.push(newTask);

    let newStage = { ...activeProject.stages[stageIndex], tasks: taskArray };

    filteredStages.splice(stageIndex, 0, newStage);

    setActiveProject({ ...activeProject, stages: filteredStages });
  };

  return (
    <div className={css.tasksWrapper}>
      {children}
      {activeId === projectData.id && controller.isEditing && <NewTask onClick={() => onClickCreateTask()} />}
    </div>
  );
};

export default Tasks;
