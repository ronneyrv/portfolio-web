import { api } from "./api";

export interface CreateProjectRequest {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: File | null;
  githubUrl: string;
  demoUrl: string;
  displayOrder: number;
}

export async function createProject(project: CreateProjectRequest) {
  const formData = new FormData();

  formData.append("title", project.title);
  formData.append("slug", project.slug);
  formData.append("shortDescription", project.shortDescription);
  formData.append("description", project.description);
  formData.append("githubUrl", project.githubUrl);
  formData.append("demoUrl", project.demoUrl);
  formData.append("displayOrder", String(project.displayOrder));

  if (project.image) {
    formData.append("image", project.image);
  }

  const response = await api.post("/projects", formData);

  return response.data;
}
