import { render, screen } from "@testing-library/react";
import ProfileCard from "./ProfileCard";

const profile = {
  name: "Ronney",
  role: "Backend",
  bio: "Developer",
  skills: ["Java"],
  github: "github",
  linkedin: "linkedin",
};

test("renders profile card", () => {
  render(<ProfileCard profile={profile} />);

  expect(screen.getByText("Ronney")).toBeInTheDocument();
  expect(screen.getByText("Backend")).toBeInTheDocument();
  expect(screen.getByText("Developer")).toBeInTheDocument();
  expect(screen.getByText("Java")).toBeInTheDocument();
});