import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'TaskTrakr',
      description: 'This project was done using react in a team I was apart of in the spring of 2024. We wanted to make a project that would help people keep track of their tasks including adding them to a calendar.',
      details: <a href="https://github.com/nelsn275/task_trackr" target="_blank" rel="noopener noreferrer">https://github.com/nelsn275/task_trackr</a>,
    },
    { id: 2, 
      title: 'Personal Website', 
      description: 'This project was done using using HTML, CSS, and JavaScript. This was one of the first projects I created back in 2022.', 
      details: <a href="https://nashjar000.github.io/Stay_Connected_With_Jared/" target="_blank" rel="noopener noreferrer">https://nashjar000.github.io/Stay_Connected_With_Jared/</a>, 
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} onClick={() => setSelectedProject(project)}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
      {selectedProject && (
        <div>
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.details}</p>
          <button onClick={() => setSelectedProject(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Projects;

