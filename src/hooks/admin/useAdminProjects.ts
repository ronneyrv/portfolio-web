import { useEffect, useState } from "react";
import { api } from "../../services/api";
import type { Project } from "../../types/Projects";

interface ProjectsPage {
  content: Project[];
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
}

export function useAdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        setError("");

        const response = await api.get<ProjectsPage>("/projects", {
          params: {
            page,
            size: 10,
            sort: "displayOrder",
          },
        });

        setProjects(response.data.content);
        setTotalPages(response.data.totalPages);
      } catch {
        setError("Erro ao carregar os projetos.");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [page]);

  function removeProject(id: number) {
    setProjects((currentProjects) =>
      currentProjects.filter((project) => project.id !== id),
    );
  }

  return {
    projects,
    loading,
    error,
    page,
    totalPages,
    setPage,
    removeProject,
  };
}
