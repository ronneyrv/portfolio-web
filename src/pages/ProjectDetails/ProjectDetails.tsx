import { useParams } from "react-router-dom";
import { useProject } from "../../hooks/useProject";
import { FaGithub, FaLink } from "react-icons/fa";
import ProjectImage from "../../components/ProjectImage/ProjectImage";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { project, loading, error } = useProject(slug);

  if (loading) {
    return (
      <section className="w-full grow px-8 lg:px-20 py-10">
        <p className="text-center text-lg animate-pulse">
          Carregando projeto...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full grow px-8 lg:px-20 py-10">
        <p className="text-center mt-10 text-red-500">{error}</p>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="w-full grow px-8 lg:px-20 py-10">
        <p className="text-center mt-10 text-red-500">Project not found</p>
      </section>
    );
  }

  return (
    <section className="w-full grow px-8 lg:px-20 py-10">
      <h1 className="text-center text-4xl font-bold mb-10">{project.title}</h1>

      <div className="max-w-4xl mx-auto">
        <ProjectImage src={project.coverImageUrl} alt={project.title} />

        <p className="mt-6 text-lg text-gray-300 text-center">
          {project.shortDescription}
        </p>

        <div className="mt-8">
          <p className="text-gray-300 leading-relaxed">{project.description}</p>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-white hover:text-blue-400 transition-colors"
          >
            <FaGithub size={22} />
            GitHub
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 ml-6 text-white hover:text-green-400 transition-colors"
            >
              <FaLink size={22} />
              Demo
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
