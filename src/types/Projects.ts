export interface Project {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  coverImageUrl: string;
  githubUrl: string;
  demoUrl: string | null;
  displayOrder: number;
  createdAt: string | null;
}
