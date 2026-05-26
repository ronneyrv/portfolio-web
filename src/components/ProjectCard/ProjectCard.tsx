import { FaDesktop, FaGithub } from "react-icons/fa";
import type { Project } from "../../types/Projects";
import ProjectImage from "../ProjectImage/ProjectImage";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shaadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl h-115 flex flex-col">
      <ProjectImage src={project.imageUrl} alt={project.title} />
      <div className="p-6 flex flex-col flex-1">
        <h2
          className="text-2xl font-bold text-white line-clamp-1"
          title={project.title}
        >
          {project.title}
        </h2>

        <p
          className="mt-4 text-gray-300 text-sm flex-1 line-clamp-5"
          title={project.description}
        >
          {project.description}
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Demo"
            className="
            text-white
            hover:text-green-400
            transition-colors"
          >
            <FaDesktop size={22} />
          </a>
        </div>
      </div>
    </article>
  );
}
