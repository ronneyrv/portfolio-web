import { render, screen } from "@testing-library/react";
import ProfileCard from "./ProfileCard";
import { MemoryRouter } from "react-router-dom";

const profile = {
  name: "Ronney Rocha",

  role: "Full Stack Developer",

  bio: "Graduado em Engenharia",

  backend: ["Java", "Spring Boot", "Node.js"],

  frontend: ["React", "TypeScript", "Tailwind CSS"],

  database: ["PostgreSQL", "MySQL"],

  tools: ["Docker", "Git"],

  github: "github",

  linkedin: "linkedin",
};

test("renders profile card", () => {
  render(
    <MemoryRouter>
      <ProfileCard profile={profile} />
    </MemoryRouter>,
  );

  expect(screen.getByText("Ronney Rocha")).toBeInTheDocument();
  expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();
  expect(screen.getByText("Graduado em Engenharia")).toBeInTheDocument();
  expect(screen.getByText("Java")).toBeInTheDocument();
  expect(screen.getByText("React")).toBeInTheDocument();
  expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
  expect(screen.getByText("Docker")).toBeInTheDocument();
});
