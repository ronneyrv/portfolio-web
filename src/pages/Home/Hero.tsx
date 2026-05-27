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
      };
    }

    warmUpApi();
  }, []);

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
          <div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
