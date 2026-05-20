import ProfileCard from "../../components/ProfileCard/ProfileCard";

export default function About() {
  const profile = {
    name: "Ronney Rocha",
    role: "Full Stack Developer | Backend Developer | Java ",
    bio: "Passionate about building web applications and learning new technologies. With experience in both frontend and backend development, I enjoy creating seamless user experiences and efficient server-side solutions.",
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/ronneyrv",
    linkedin: "https://www.linkedin.com/in/ronney-rocha-9b1a4b1ba/",
  };
  return <ProfileCard profile={profile} />;
}
