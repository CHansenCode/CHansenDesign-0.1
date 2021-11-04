import Tasks from "../Tasks/Tasks";

import Input from "../Input/Input";

import css from "./Stages.module.scss";

const Stage = ({
  data,
  children,
  activeProject,
  setActiveProject,
  controller,
  setController,
  activeId,
  setActiveId,
  stageIndex,
}) => {
  const handleStageChange = (e, propName) => {
    let filteredStages = activeProject.stages.filter((stage) => stage.id !== data.id);

    let newObject = { ...data, [propName]: e.target.value };

    filteredStages.splice(stageIndex, 0, newObject);

    setActiveProject({ ...activeProject, stages: filteredStages });
  };

  const onClickDeleteStage = () => {
    let oldArray = activeProject.stages;

    let newStageArray = activeProject.stages.filter((stage) => stage.id !== data.id);

    setActiveProject({ ...activeProject, stages: newStageArray });
  };

  return (
    <div className={css.stageWrapper}>
      <div className={css.stageCard}>
        <div className={css.titleAndDeleteButton}>
          <h4>Stage {stageIndex + 1}</h4>
          {controller.isEditing && <button onClick={() => onClickDeleteStage()}>X</button>}
        </div>

        <Input
          activeId={activeId}
          controller={controller}
          placeholder="Stage Title"
          value={data.title}
          onChange={(e) => handleStageChange(e, "title")}
        ></Input>
        <Input
          activeId={activeId}
          controller={controller}
          placeholder="version"
          value={data.v}
          onChange={(e) => handleStageChange(e, "v")}
        ></Input>
        <Input
          activeId={activeId}
          controller={controller}
          placeholder="Stage deadline"
          value={data.deadline}
          onChange={(e) => handleStageChange(e, "deadline")}
        ></Input>
      </div>
      <h6>Tasks:</h6>
      {children}
    </div>
  );
};

export default Stage;
