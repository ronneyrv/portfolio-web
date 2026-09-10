import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { vi } from "vitest";
import ProjectDetails from "./ProjectDetails";
import { useProject } from "../../hooks/useProject";

vi.mock("../../hooks/useProject", () => ({
  useProject: vi.fn(),
}));

const mockedUseProject = vi.mocked(useProject);

const project = {
  id: 1,
  title: "Portfolio",
  slug: "portfolio",
  shortDescription: "Short description",
  description: "Project description",
  coverImageUrl: "image",
  githubUrl: "https://github.com/project",
  demoUrl: "https://project.com",
  displayOrder: 1,
  createdAt: null,
};

function renderProjectDetails() {
  return render(
    <MemoryRouter initialEntries={["/projects/portfolio"]}>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </MemoryRouter>,
  );
}

test("renders project details", () => {
  mockedUseProject.mockReturnValue({
    project,
    loading: false,
    error: "",
  });

  renderProjectDetails();

  expect(screen.getByText("Portfolio")).toBeInTheDocument();
  expect(screen.getByText("Short description")).toBeInTheDocument();
  expect(screen.getByText("Project description")).toBeInTheDocument();
  expect(screen.getByText("GitHub")).toBeInTheDocument();
  expect(screen.getByText("Demo")).toBeInTheDocument();
});

test("renders loading state", () => {
  mockedUseProject.mockReturnValue({
    project: null,
    loading: true,
    error: "",
  });

  renderProjectDetails();

  expect(screen.getByText("Carregando projeto...")).toBeInTheDocument();
});

test("renders error state", () => {
  mockedUseProject.mockReturnValue({
    project: null,
    loading: false,
    error: "Error loading project",
  });

  renderProjectDetails();

  expect(screen.getByText("Error loading project")).toBeInTheDocument();
});

test("renders project not found state", () => {
  mockedUseProject.mockReturnValue({
    project: null,
    loading: false,
    error: "Project not found",
  });

  renderProjectDetails();

  expect(screen.getByText("Project not found")).toBeInTheDocument();
});

test("does not render Demo when demoUrl is not available", () => {
  mockedUseProject.mockReturnValue({
    project: {
      ...project,
      demoUrl: null,
    },
    loading: false,
    error: "",
  });

  renderProjectDetails();

  expect(screen.queryByText("Demo")).not.toBeInTheDocument();
});
