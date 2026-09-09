import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

const project = {
  id: 1,
  title: "Portfolio",
  slug: "portfolio",
  shortDescription: "Test",
  description: "Test",
  coverImageUrl: "image",
  githubUrl: "github",
  demoUrl: "demo",
  displayOrder: 1,
  createdAt: null,
};

test("renders project card", () => {
  render(<ProjectCard project={project} />);
  expect(screen.getByText("Portfolio")).toBeInTheDocument();
  expect(screen.getByText("Test")).toBeInTheDocument();
});
