import { PROJECTS } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="project-grid">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
