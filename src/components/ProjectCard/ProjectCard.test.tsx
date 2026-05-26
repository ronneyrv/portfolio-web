import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

const project={

 id:1,
 title:"Portfolio",
 description:"Test",
 imageUrl:"image",
 githubUrl:"github",
 demoUrl:"demo"

};

test("renders project card", () => {
  render(
    <ProjectCard
      project={project}
    />,
  );
  expect(screen.getByText("Portfolio")).toBeInTheDocument();
  expect(screen.getByText("Test")).toBeInTheDocument();
});
