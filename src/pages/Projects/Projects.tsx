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

    // Limpa o timer se o componente for desmontado ou parar de carregar
    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center mt-10 space-y-2">
        <p className="text-lg animate-pulse">Loading projects...</p>
        {takeLonger && (
          <p className="text-sm text-amber-600 max-w-md mx-auto text-center">
            The Render free server is booting up. This process can take up to 2 minutes, thank you for your patience!
          </p>
        )}
      </div>
    );
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <section>
      <h1 className="text-4xl font-bold mb-10">projects</h1>
      <ProjectCarousel projects={projects} />
    </section>
  );
}
