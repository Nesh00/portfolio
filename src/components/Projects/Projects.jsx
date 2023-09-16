import '../../css/Projects/Projects.css';
import { useContext, useRef, useState } from 'react';
import { CursorContext } from '../../context/CursorContext';
import { projects } from '../../data/projects';
import SliderBtns from './SliderBtns';

const Projects = () => {
  const { cursorChangeHandler } = useContext(CursorContext);
  const projectListRef = useRef(null);
  const [selectedProjects, setSelectedProjects] = useState({
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

  const selectedProjectHandler = (id) => {
    selectedProjects[id] = !selectedProjects[id];
    setSelectedProjects((currState) => {
      return { ...currState };
    });
  };

  const showProjectDetails = (project) => {
    const img = project.name.replace(/ /g, '_').toLowerCase();

    return (
      <li
        key={project.id}
        className={`project ${project.id}--open`}
        onClick={() => selectedProjectHandler(project.id)}
        onMouseEnter={() => cursorChangeHandler('cursor--close')}
        onMouseLeave={() => cursorChangeHandler('')}
      >
        <p>{project.name}</p>
        <div className='project__links'>
          <a
            href={`${project.github}`}
            target='_blank'
            rel='noopener noreferrer'
            className='project__link'
            onMouseEnter={() => cursorChangeHandler('cursor--open')}
            onMouseLeave={() => cursorChangeHandler('')}
          >
            GitHub
          </a>
          <a
            href={`${project.liveUrl}`}
            target='_blank'
            rel='noopener noreferrer'
            className='project__link'
            onMouseEnter={() => cursorChangeHandler('cursor--open')}
            onMouseLeave={() => cursorChangeHandler('')}
          >
            View Live
          </a>
        </div>
        <img
          className='project__img'
          src={require(`../../images/projects/${img}.png`)}
          alt=''
        />
      </li>
    );
  };

  return (
    <section className='projects'>
      <ul className='projects__list' ref={projectListRef}>
        {projects.map((project) => (
          selectedProjects[project.id] ? (
            showProjectDetails(project)
          ) : (
            <li
              key={project.id}
              className={`project ${project.id}`}
              onClick={() => selectedProjectHandler(project.id)}
              onMouseEnter={() => cursorChangeHandler('cursor--open')}
              onMouseLeave={() => cursorChangeHandler('')}
            >
              <p className='project__name'>{project.name}</p>
            </li>
          )
        ))}
        </ul>
        <SliderBtns
          projects={projects}
          listRef={projectListRef}
          setSelectedProjects={setSelectedProjects}
        />
    </section>
  );
};

export default Projects;
