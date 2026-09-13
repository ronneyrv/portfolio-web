import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
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
  images: [],
};

test("renders project card", () => {
  render(
    <MemoryRouter>
      <ProjectCard project={project} />
    </MemoryRouter>,
  );
  expect(screen.getByText("Portfolio")).toBeInTheDocument();
  expect(screen.getByText("Test")).toBeInTheDocument();
});
