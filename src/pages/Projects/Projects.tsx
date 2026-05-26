import { useEffect, useState } from "react";
import ProjectCarousel from "../../components/ProjectCarousel/ProjectCarousel";
import { useProjects } from "../../hooks/userProjects";

export default function Projects() {
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

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center mt-10 space-y-2">
        <p className="text-lg animate-pulse">Carregando projetos...</p>
        {takeLonger && (
          <p className="text-sm text-amber-600 max-w-md mx-auto text-center">
            O servidor gratuito do Render está iniciando. Esse processo pode levar até 2 minutos, obrigado pela paciência!
            {/*The Render free server is booting up. This process can take up to 2 minutes, thank you for your patience!*/}
          </p>
        )}
      </div>
    );
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <section className="w-full grow px-8 lg:px-20 py-10">
      <h1 className="text-center text-6xl font-bold mb-10">Projects</h1>
      <ProjectCarousel projects={projects} />
    </section>
  );
}
