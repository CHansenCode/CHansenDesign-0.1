export const handleTaskChange = (e, propName, oldTask, oldStage, stageIndex, taskIndex, activeProject) => {
  let newTask = { ...oldTask, [propName]: e.target.value };

  let filteredStages = activeProject.stages.filter((stage) => stage.id !== oldStage.id);
  let filteredTasks = activeProject.stages[stageIndex].tasks.filter((task) => task.id !== oldTask.id);

  filteredTasks.splice(taskIndex, 0, newTask);

  let newStage = {
    ...oldStage,
    tasks: filteredTasks,
  };

  filteredStages.splice(stageIndex, 0, newStage);

  let repopulatedStages = filteredStages;

  setActiveProject({ ...activeProject, stages: repopulatedStages });
};
