import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

test("renders project card", () => {
  render(
    <ProjectCard
      project={{
        id: 1,
        title: "Project 1",
        description: "Description of project 1",
        imageUrl: "https://image",
        githubUrl: "github",
        demoUrl: "demo",
      }}
    />,
  );
  expect(screen.getByText("Project 1")).toBeInTheDocument();
  expect(screen.getByText("Description of project 1")).toBeInTheDocument();
});
