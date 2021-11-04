import Stages from "../Stages/Stages";

import CircleDiagram from "../CircleDiagram/CircleDiagram";
import Input from "../Input/Input";

import css from "./Projects.module.scss";

export const Project = ({ projectData, children, activeProject, setActiveProject, controller, activeId }) => {
  let activeData = projectData;
  activeProject && activeProject.id === projectData.id ? (activeData = activeProject) : (activeData = projectData);

  const handleProjectChange = (e, propName, activeProject, setActiveProject) => {
    setActiveProject({ ...activeProject, [propName]: e.target.value });
  };

  return (
    <div className={css.projectWrapper}>
      <div className={css.projectCard}>
        <form className={css.textForm} onSubmit={(e) => e.preventDefault}>
          <Input
            className={css.title}
            projectData={projectData}
            activeId={activeId}
            controller={controller}
            value={activeData.title}
            placeholder="Project title"
            onChange={(e) => handleProjectChange(e, "title", activeProject, setActiveProject)}
          />
          <Input
            projectData={projectData}
            activeId={activeId}
            controller={controller}
            value={activeData.category}
            placeholder="Project Category"
            onChange={(e) => handleProjectChange(e, "category", activeProject, setActiveProject)}
          />
          <Input
            projectData={projectData}
            activeId={activeId}
            controller={controller}
            value={activeData.body}
            placeholder="Project description"
            onChange={(e) => handleProjectChange(e, "body", activeProject, setActiveProject)}
          />
        </form>

        <div className={css.progressionDiagrams}>
          {activeData.stages.map((stage) => (
            <CircleDiagram key={stage.id + stage.name} />
          ))}
        </div>

        <form>
          <Input
            projectData={projectData}
            activeId={activeId}
            controller={controller}
            value={activeData.deadline}
            placeholder="Project Deadline"
            onChange={(e) => handleProjectChange(e, "deadline", activeProject, setActiveProject)}
          />
          <Input
            projectData={projectData}
            activeId={activeId}
            controller={controller}
            value={activeData.startTime}
            placeholder="Project Start Date"
            onChange={(e) => handleProjectChange(e, "startTime", activeProject, setActiveProject)}
          />
        </form>
      </div>

      {children}
    </div>
  );
};

export default Project;
