import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";

import css from "./Subtasks.module.scss";

const Subtask = ({
  data,
  controller,
  activeId,
  stageIndex,
  taskIndex,
  subtaskIndex,
  activeProject,
  setActiveProject,
}) => {
  const toggleColor = {
    color: data.resolved ? "rgba(100,255,100,0.9)" : "rgba(255,0,0,0.9)",
  };

  const handleSubtaskChange = (e, propName, data) => {
    let filteredStages = activeProject.stages.filter((stage) => stage.id !== activeProject.stages[stageIndex].id);
    let filteredTasks = activeProject.stages[stageIndex].tasks.filter(
      (task) => task.id !== activeProject.stages[stageIndex].tasks[taskIndex].id
    );
    let filteredSubtasks = activeProject.stages[stageIndex].tasks[taskIndex].subtasks.filter(
      (subtask) => subtask.id !== data.id
    );

    let newSubtask = { ...data, [propName]: e.target.value };
    let newTask = { ...activeProject.stages[stageIndex].tasks[taskIndex], subtasks: filteredSubtasks };
    let newStage = { ...activeProject.stages[stageIndex], tasks: filteredTasks };

    filteredSubtasks.splice(subtaskIndex, 0, newSubtask);
    filteredTasks.splice(taskIndex, 0, newTask);
    filteredStages.splice(stageIndex, 0, newStage);

    setActiveProject({ ...activeProject, stages: filteredStages });
  };
  const onClickToggleResolved = (e, data) => {
    let filteredStages = activeProject.stages.filter((stage) => stage.id !== activeProject.stages[stageIndex].id);
    let filteredTasks = activeProject.stages[stageIndex].tasks.filter(
      (task) => task.id !== activeProject.stages[stageIndex].tasks[taskIndex].id
    );
    let filteredSubtasks = activeProject.stages[stageIndex].tasks[taskIndex].subtasks.filter(
      (subtask) => subtask.id !== data.id
    );

    let newSubtask = { ...data, resolved: !data.resolved };
    let newTask = { ...activeProject.stages[stageIndex].tasks[taskIndex], subtasks: filteredSubtasks };
    let newStage = { ...activeProject.stages[stageIndex], tasks: filteredTasks };

    filteredSubtasks.splice(subtaskIndex, 0, newSubtask);
    filteredTasks.splice(taskIndex, 0, newTask);
    filteredStages.splice(stageIndex, 0, newStage);

    setActiveProject({ ...activeProject, stages: filteredStages });
  };
  const onClickDeleteSubtask = () => {
    let oldArray = activeProject.stages;

    let newSubtaskArray = activeProject.stages[stageIndex].tasks[taskIndex].subtasks.filter(
      (subtask) => subtask.id !== data.id
    );
    oldArray[stageIndex].tasks[taskIndex].subtasks = newSubtaskArray;
    let newArray = oldArray;

    setActiveProject({ ...activeProject, stages: newArray });
  };

  return (
    <div className={`${css.subtaskCard} ${data && data.resolved && css.resolved}`}>
      <Input
        activeId={activeId}
        controller={controller}
        value={data.title}
        onChange={(e) => handleSubtaskChange(e, "title", data)}
        placeholder="subtask"
      />

      <div className={`${css.inputWithSuffix}`}>
        <Input
          activeId={activeId}
          controller={controller}
          value={data.timeRemaining && data.timeRemaining}
          onChange={(e) => handleSubtaskChange(e, "timeRemaining", data)}
        ></Input>
        <h5>mins</h5>
      </div>

      {controller.isEditing ? (
        <button className={css.deleteButton} onClick={() => onClickDeleteSubtask()}>
          x
        </button>
      ) : (
        <Checkbox ternary={data.resolved} onClick={(e) => onClickToggleResolved(e, data)} />
      )}
    </div>
  );
};

export default Subtask;
