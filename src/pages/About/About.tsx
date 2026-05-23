import ProfileCard from "../../components/ProfileCard/ProfileCard";

export default function About() {
  const profile = {
    name: "Ronney Rocha",
    role: "Full Stack Developer",
    bio: "Graduado em Engenharia de Produção e graduando em Análise e Desenvolvimento de Sistemas, com experiência prática no desenvolvimento de aplicações e ferramentas utilizadas em ambientes operacionais. Atualmente com foco em desenvolvimento backend utilizando Java e Spring Boot, além da criação de aplicações web modernas com React, Tailwind CSS e TypeScript. Experiência prática em modelagem de banco de dados, desenvolvimento de APIs, implementação de interfaces e construção de regras de negócio.",
    backend: [
      "Java",
      "Spring Boot",
      "Node.js",
    ],
    frontend: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    database: [
      "PostgreSQL",
      "MySQL",
    ],
    tools: [
      "Docker",
      "Git",
    ],
    github: "https://github.com/ronneyrv",
    linkedin: "https://www.linkedin.com/in/ronney-rocha",
  };
  return <ProfileCard profile={profile} />;
}
