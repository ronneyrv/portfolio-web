import { useEffect, useState } from "react";
import { api } from "../services/api";
import { AxiosError } from "axios";
import type { Project } from "../types/Projects";

export function useProject(slug: string | undefined) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProject() {
      if (!slug) {
        setError("Project not found");
        setLoading(false);
        return;
      }

      try {
        const response = await api.get(`/projects/${slug}`);
        setProject(response.data);
      } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 404) {
          setError("Project not found");
        } else {
          setError("Error loading project");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [slug]);

  return {
    project,
    loading,
    error,
  };
}
