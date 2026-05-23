import { Link } from "react-router-dom";

export default function Hero() {
  const technologies = [
    "React",
    "Node",
    "TypeScript",
    "Tailwind CSS",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "MySQL",
    "Docker",
  ];

  return (
    <section className="min-h-[calc(100vh-300px)] px-8 lg:px-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full">

        <h1 className="text-6xl md:text-7xl font-bold mt-4">Ronney Rocha</h1>

        <h2 className="text-2xl text-slate-300 mt-6">
          Full Stack Developer
          <br />
          React | Node | Java | Spring Boot
        </h2>

        <p className="mt-8 max-w-2xl text-slate-400 leading-8">
          Desenvolvendo aplicações web modernas e backend escaláveis.
        </p>

        <div className=" flex gap-4 mt-10">
          <Link
            to="/about"
            className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Sobre mim
          </Link>

          <Link
            to="/projects"
            className="border border-slate-600 px-6 py-3 rounded-xl hover:border-blue-500 transition"
          >
            Ver Projetos
          </Link>
        </div>

        <div className="flex flex-wrap gap-3 mt-16">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-slate-800 px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
