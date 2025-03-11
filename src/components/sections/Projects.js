import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "프로젝트 1",
      description: "프로젝트에 대한 간단한 설명",
      tech: ["React", "CSS", "Node.js"],
      image: "/project1.jpg",
      github: "https://github.com/username/project1",
      demo: "https://project1-demo.com"
    },
    {
      id: 2,
      title: "프로젝트 2",
      description: "프로젝트에 대한 간단한 설명",
      tech: ["React", "Tailwind", "Firebase"],
      image: "/project2.jpg",
      github: "https://github.com/username/project2",
      demo: "https://project2-demo.com"
    },
    // 더 많은 프로젝트 추가
  ];

  return (
    <section id="projects" className="section">
      <h2>프로젝트 (Projects)</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Projects;