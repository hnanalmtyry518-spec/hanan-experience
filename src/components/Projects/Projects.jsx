import { useState } from "react";
import "./Projects.css";
import projects from "./ProjectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects" id="projects">

      <h1 className="projects-title">
        المشاريع
      </h1>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onOpen={() => setSelectedProject(project)}
        />
      ))}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}

export default Projects;