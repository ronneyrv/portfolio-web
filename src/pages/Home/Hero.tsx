import { useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

export default function Hero() {
  useEffect(() => {
    async function warmUpApi() {
      try {
        await api.get("/ping");
      } catch (error) {
        console.error("Erro ao acordar API:", error);
      }
    }

    warmUpApi();
  }, []);

  return (
    <section
      id="home"
      className="h-[calc(100vh-97px)] px-8 lg:px-20 flex items-center scroll-mt-24"
    >
      <div className="w-full -translate-y-10">
        <p className="text-lg text-slate-400 mb-4">Olá, eu sou</p>

        <h1 className="text-6xl md:text-7xl font-bold">Ronney Rocha</h1>

        <h2 className="text-2xl md:text-3xl text-slate-300 mt-6">
          Full Stack Developer
        </h2>

        <p className="mt-4 text-lg text-slate-400">
          React | TypeScript | Java | Spring Boot
        </p>

        <p className="mt-8 max-w-2xl text-lg text-slate-400 leading-8">
          Desenvolvedor focado na construção de aplicações web modernas, APIs
          REST e soluções de backend.
        </p>

        <div className="mt-10">
          <Link
            to="/#projects"
            className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Ver meus projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
