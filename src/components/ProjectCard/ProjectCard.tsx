import type { Project } from "../../types/Projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="h-56 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="mt-4 text-gray-600">{project.description}</p>
      </div>
    </div>
  );
}
