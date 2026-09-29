import { api } from "./api";
import type { Project, ProjectImage } from "../types/Projects";

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

export interface CreateProjectImageRequest {
  image: File;
  altText: string;
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

export async function findProjectById(id: number): Promise<Project> {
  const response = await api.get<Project>(`/projects/id/${id}`);

  return response.data;
}

export async function updateProject(id: number, project: CreateProjectRequest) {
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

  const response = await api.put(`/projects/${id}`, formData);

  return response.data;
}

export async function createProjectImage(
  projectId: number,
  imageData: CreateProjectImageRequest,
): Promise<ProjectImage> {
  const formData = new FormData();

  formData.append("image", imageData.image);
  formData.append("altText", imageData.altText);
  formData.append("displayOrder", String(imageData.displayOrder));

  const response = await api.post<ProjectImage>(
    `/projects/${projectId}/images`,
    formData,
  );

  return response.data;
}

export interface UpdateProjectImageRequest {
  image?: File;
  altText: string;
  displayOrder: number;
}

export async function updateProjectImage(
  projectId: number,
  imageId: number,
  imageData: UpdateProjectImageRequest,
): Promise<ProjectImage> {
  const formData = new FormData();

  if (imageData.image) {
    formData.append("image", imageData.image);
  }

  formData.append("altText", imageData.altText);
  formData.append("displayOrder", String(imageData.displayOrder));

  const response = await api.put<ProjectImage>(
    `/projects/${projectId}/images/${imageId}`,
    formData,
  );

  return response.data;
}

export async function deleteProjectImage(
  projectId: number,
  imageId: number,
): Promise<void> {
  await api.delete(`/projects/${projectId}/images/${imageId}`);
}

export async function deleteProject(id: number): Promise<void> {
  await api.delete(`/projects/${id}`);
}
