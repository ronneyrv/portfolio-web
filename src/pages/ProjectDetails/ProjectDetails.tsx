import { useParams } from "react-router-dom";
import { useProject } from "../../hooks/useProject";
import { FaGithub, FaLink } from "react-icons/fa";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";
import type { ProjectImage } from "../../types/Projects";

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

  const galleryImages: ProjectImage[] = [
    {
      id: 0,
      imageUrl: project.coverImageUrl,
      displayOrder: 0,
      altText: project.title,
    },
    ...project.images,
  ];

  return (
    <section className="w-full grow px-8 lg:px-20 py-10">
      <h1 className="text-center text-4xl font-bold mb-6 lg:mb-10">
        {project.title}
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-start">
          <ProjectGallery images={galleryImages} />

          <div className="flex flex-col">
            <p className="text-lg text-gray-300 leading-relaxed">
              {project.shortDescription}
            </p>

            <p className="mt-8 text-gray-300 leading-relaxed">
              {project.description}
            </p>

            <div className="flex items-center gap-6 mt-8">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
              >
                <FaGithub size={22} />
                GitHub
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-green-400 transition-colors"
                >
                  <FaLink size={22} />
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
