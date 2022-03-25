import { useContext, useRef, useState } from 'react';
import { CursorContext } from '../../context/CursorContext';
import '../../css/Projects/Projects.css';
import SliderBtns from './SliderBtns';

const projects = [
  { name: 'project1' },
  { name: 'project2' },
  { name: 'project3' },
  { name: 'project4' },
  { name: 'project5' },
  { name: 'project6' },
  { name: 'project7' },
  { name: 'project8' },
  { name: 'project9' },
];

const Projects = () => {
  const { cursorChangeHandler } = useContext(CursorContext);
  const projectListRef = useRef(null);
  const [openProjects, setOpenProjects] = useState({
    project1: false,
    project2: false,
    project3: false,
    project4: false,
    project5: false,
    project6: false,
    project7: false,
    project8: false,
    project9: false,
  });

  const openProjectsHandler = (name) => {
    openProjects[name] = !openProjects[name];
    setOpenProjects((currState) => {
      return { ...currState };
    });
  };

  return (
    <>
      <section className='projects'>
        <ul className='projects__list' ref={projectListRef}>
          {projects.map((project) => {
            return (
              <li
                key={project.name}
                className={`project ${
                  openProjects[project.name]
                    ? `${project.name}--open`
                    : project.name
                }`}
                onClick={() => openProjectsHandler(project.name)}
                onMouseEnter={() => cursorChangeHandler('hovered')}
                onMouseLeave={() => cursorChangeHandler('')}
              >
                {project.name}
              </li>
            );
          })}
        </ul>
        <SliderBtns
          projects={projects}
          listRef={projectListRef}
          setOpenProjects={setOpenProjects}
        />
      </section>
    </>
  );
};

export default Projects;
