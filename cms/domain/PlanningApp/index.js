import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Projects from "./Projects/Projects";
import Project from "./Projects/Project";
import Stages from "./Stages/Stages";
import Stage from "./Stages/Stage";
import Tasks from "./Tasks/Tasks";
import Task from "./Tasks/Task";
import Subtasks from "./Subtasks/Subtasks";
import Subtask from "./Subtasks/Subtask";

import ButtonsMenu from "./ButtonsMenu/ButtonsMenu";

import ObjectViewer from "../../components/ObjectViewer/ObjectViewer";

import { getPlannings } from "../../actions/planningApp.actions";

export const PlanningApp = ({ array }) => {
  const dispatch = useDispatch();

  const [controller, setController] = useState({
    canEdit: true,
    isEditing: false,
    editInProcess: false,
    canResolveSubtasks: true,
    isResolvingSubtasks: false,
    toggleShowSettingsMenu: false,
  });
  const [activeProject, setActiveProject] = useState({});
  const [activeCopy, setActiveCopy] = useState(null);
  const [activeId, setActiveId] = useState(null);

  //get data from server to store
  useEffect(() => {
    dispatch(getPlannings());
  }, [dispatch]);

  let projectsArray = useSelector((state) => state.planning);

  useEffect(() => {
    if (activeId && activeId.length > 1) {
      setActiveProject(projectsArray.find((project) => project.id === activeId));
    } else setActiveProject({});
  }, [activeId]);

  function clear() {
    setActiveId(null);
    setController({ ...controller, isEditing: false, editInProcess: false, isResolvingSubtasks: false });
  }

  return (
    <Projects controller={controller} activeId={activeId}>
      {projectsArray.length > 0 &&
        projectsArray.map((project) => (
          <Project
            key={project.id}
            projectData={project}
            //
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            controller={controller}
            setController={setController}
            activeId={activeId}
            setActiveId={setActiveId}
          >
            <ButtonsMenu
              activeCopy={activeCopy}
              controller={controller}
              projectData={project}
              activeId={activeId}
              activeProject={activeProject}
              setActiveCopy={setActiveCopy}
              setActiveId={setActiveId}
              setActiveProject={setActiveProject}
              setController={setController}
              clear={clear}
            ></ButtonsMenu>

            <Stages
              controller={controller}
              activeId={activeId}
              projectData={project}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            >
              {activeProject &&
                activeProject.id === project.id &&
                activeProject.stages.map((stage, stageIndex) => (
                  <Stage
                    key={stage.id}
                    data={stage}
                    stageIndex={stageIndex}
                    //
                    activeProject={activeProject}
                    setActiveProject={setActiveProject}
                    controller={controller}
                    setController={setController}
                    activeId={activeId}
                    setActiveId={setActiveId}
                  >
                    <Tasks
                      stageIndex={stageIndex}
                      //
                      controller={controller}
                      activeId={activeId}
                      projectData={project}
                      activeProject={activeProject}
                      setActiveProject={setActiveProject}
                    >
                      {activeProject &&
                        stage.tasks.map((task, taskIndex) => (
                          <Task
                            key={task.id}
                            data={task}
                            stageIndex={stageIndex}
                            taskIndex={taskIndex}
                            //
                            stageData={stage}
                            activeProject={activeProject}
                            setActiveProject={setActiveProject}
                            controller={controller}
                            setController={setController}
                            activeId={activeId}
                            setActiveId={setActiveId}
                          >
                            <Subtasks
                              stageIndex={stageIndex}
                              taskIndex={taskIndex}
                              //
                              controller={controller}
                              activeId={activeId}
                              projectData={project}
                              activeProject={activeProject}
                              setActiveProject={setActiveProject}
                            >
                              {task.subtasks.map((subtask, subtaskIndex) => (
                                <Subtask
                                  key={subtask.id}
                                  data={subtask}
                                  stageIndex={stageIndex}
                                  taskIndex={taskIndex}
                                  subtaskIndex={subtaskIndex}
                                  //
                                  projectData={project}
                                  activeProject={activeProject}
                                  setActiveProject={setActiveProject}
                                  controller={controller}
                                  setController={setController}
                                  activeId={activeId}
                                  setActiveId={setActiveId}
                                />
                              ))}
                            </Subtasks>
                          </Task>
                        ))}
                    </Tasks>
                  </Stage>
                ))}
            </Stages>
          </Project>
        ))}
    </Projects>
  );
};

export default PlanningApp;
