import ProfileCard from "../../components/ProfileCard/ProfileCard";

export default function About() {
  const profile = {
    name: "Ronney Rocha",
    role: "Full Stack Developer | Backend Developer | Java ",
    bio: "Graduado em Engenharia de Produção e graduando em Análise e Desenvolvimento de Sistemas, com experiência prática no desenvolvimento de aplicações e ferramentas utilizadas em ambiente operacional. Atualmente desenvolvo soluções internas para apoio às operações do meu trabalho, criando aplicações web completas desde modelagem de banco de dados até implementação de interfaces, APIs e regras de negócio.",
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
    linkedin: "https://www.linkedin.com/in/ronney-rocha",
  };
  return <ProfileCard profile={profile} />;
}
