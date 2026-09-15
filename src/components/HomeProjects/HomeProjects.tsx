import { useEffect, useState } from "react";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import { useProjects } from "../../hooks/userProjects";

export default function HomeProjects() {
  const { projects, loading, error } = useProjects();
  const [takeLonger, setTakeLonger] = useState(false);

  useEffect(() => {
    let timer: number | undefined;

    if (loading) {
      timer = setTimeout(() => {
        setTakeLonger(true);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <section
      id="projects"
      className="w-full min-h-[calc(100vh-97px)] px-8 lg:px-20 pt-20 pb-40 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold">Projetos</h2>

          <p className="mt-4 text-slate-400">
            Alguns dos projetos que venho desenvolvendo.
          </p>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-10 space-y-2">
            <p className="text-lg animate-pulse">Carregando projetos...</p>

            {takeLonger && (
              <p className="text-sm text-amber-600 max-w-md mx-auto text-center">
                O servidor gratuito do Render está iniciando. Esse processo pode
                levar até 2 minutos, obrigado pela paciência!
              </p>
            )}
          </div>
        )}

        {!loading && error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {!loading && !error && projects.length > 0 && (
          <ProjectCarousel projects={projects} />
        )}

        {!loading && !error && projects.length === 0 && (
          <p className="text-center text-slate-400">
            Nenhum projeto disponível.
          </p>
        )}
      </div>
    </section>
  );
}
