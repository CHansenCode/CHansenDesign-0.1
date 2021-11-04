import NewStage from "./NewStage";

import css from "./Stages.module.scss";

import uniqueIdGenerator from "../../../utils/uniqueIdGenerator";

const Stages = ({ children, controller, activeId, projectData, activeProject, setActiveProject }) => {
  const onClickAddNewStage = () => {
    let stageArray = activeProject.stages;
    let newStage = {
      id: uniqueIdGenerator(),
      title: "",
      v: "",
      deadline: "",
      tasks: [
        {
          id: uniqueIdGenerator(),
          title: "",
          v: "",
          deadline: "",
          version: "",
          subtasks: [
            {
              id: uniqueIdGenerator(),
              name: "",
              assignedTo: [],
              timeRemaining: 0,
              resolved: false,
            },
          ],
        },
      ],
    };
    stageArray.push(newStage);

    setActiveProject({ ...activeProject, stages: stageArray });
  };

  return (
    <div className={css.stagesWrapper}>
      {children}
      {activeId === projectData.id && controller.isEditing && children.length < 4 && (
        <NewStage onClick={() => onClickAddNewStage()} />
      )}
    </div>
  );
};

export default Stages;
