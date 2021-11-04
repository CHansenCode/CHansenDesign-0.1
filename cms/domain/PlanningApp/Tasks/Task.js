import { useState } from "react";

import Input from "../Input/Input";

import css from "./Tasks.module.scss";

export const Task = ({
  stageData,
  data,
  children,
  activeId,
  activeProject,
  setActiveProject,
  controller,
  stageIndex,
  taskIndex,
}) => {
  const [showSubtasks, setShowSubtasks] = useState(false);
  const dropdown = {
    height: showSubtasks || controller.isEditing || controller.isResolvingSubtasks ? "auto" : 0,
    overflow: "hidden",
  };

  const handleTaskChange = (e, propName) => {
    let filteredStages = activeProject.stages.filter((stage) => stage.id !== activeProject.stages[stageIndex].id);
    let filteredTasks = activeProject.stages[stageIndex].tasks.filter((task) => task.id !== data.id);

    let newTask = { ...data, [propName]: e.target.value };
    let newStage = { ...activeProject.stages[stageIndex], tasks: filteredTasks };

    filteredTasks.splice(taskIndex, 0, newTask);
    filteredStages.splice(stageIndex, 0, newStage);

    setActiveProject({ ...activeProject, stages: filteredStages });
  };
  const onClickDeleteTask = () => {
    let oldArray = activeProject.stages;

    let newTaskArray = activeProject.stages[stageIndex].tasks.filter((task) => task.id !== data.id);
    oldArray[stageIndex].tasks = newTaskArray;
    let newArray = oldArray;

    setActiveProject({ ...activeProject, stages: newArray });
  };

  return (
    <div className={css.taskWrapper}>
      <div className={css.taskCard} onClick={() => setShowSubtasks(!showSubtasks)}>
        <Input
          activeId={activeId}
          controller={controller}
          value={data.title}
          placeholder="Task Title"
          onClick={(e) => handleSubtaskToggle()}
          onChange={(e) => handleTaskChange(e, "title", data)}
        ></Input>
        {controller.isEditing ? (
          <button onClick={() => onClickDeleteTask()}>x</button>
        ) : (
          <>
            {getResolvedSubtasksINTEGER(data.subtasks)} / {data.subtasks.length}
          </>
        )}
      </div>
      <div style={dropdown}>{children}</div>
    </div>
  );
};

export default Task;

const getResolvedSubtasksINTEGER = (data) => {
  let resolvedCounter = 0;
  data.map((subtask) => {
    subtask.resolved ? (resolvedCounter += 1) : null;
  });
  return resolvedCounter;
};
