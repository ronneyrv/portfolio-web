import { FaDesktop, FaGithub } from "react-icons/fa";
import type { Project } from "../../types/Projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full h-full bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
      <img
        src={project.imageUrl}
        alt="Image not found"
        className="h-56 w-full object-cover"
      />
      <div className="p-6 flex flex-col grow">
        <h2 className="text-2xl font-bold text-white line-clamp-1" title={project.title}>
          {project.title}
        </h2>
        <p className="mt-4 text-gray-300 line-clamp-3" title={project.description}>
          {project.description}
        </p>
        <div className="mt-auto pt-6 flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-blue-400"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="
            text-white
            hover:text-green-400"
          >
            <FaDesktop size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}
