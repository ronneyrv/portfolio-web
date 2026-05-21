import { useEffect, useState } from "react";
import type { Project } from "../types/Projects";
import { api } from "../services/api";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await api.get("/projects");
        setProjects(response.data.content);
      } catch {
        setError("Error loading projects");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();

  }, []);

  return {
    projects,
    loading,
    error,
  }
}
