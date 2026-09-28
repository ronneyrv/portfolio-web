import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAdminProjects } from "../../hooks/admin/useAdminProjects";

export default function Admin() {
  const navigate = useNavigate();
  const { projects, loading, error } = useAdminProjects();

  return (
    <section className="grow px-8 py-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Administração</h1>

          <button
            type="button"
            onClick={() => navigate("/admin/projects/new")}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            + Novo projeto
          </button>
        </div>

        {loading && (
          <p className="mt-8 text-slate-400">Carregando projetos...</p>
        )}

        {error && <p className="mt-8 text-red-400">{error}</p>}

        {!loading && !error && (
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
            <div className="overflow-x-auto">
              <table className="w-full min-w-190 text-left">
                <thead className="border-b border-slate-700 bg-slate-800">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                      Capa
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                      Projeto
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                      Slug
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                      Ordem
                    </th>

                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">
                      Ações
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-800">
                  {projects.map((project) => (
                    <tr
                      key={project.id}
                      className="transition-colors hover:bg-slate-800/50"
                    >
                      <td className="px-6 py-4">
                        <img
                          src={project.coverImageUrl}
                          alt={project.title}
                          className="h-14 w-20 rounded-lg object-cover"
                        />
                      </td>

                      <td className="px-6 py-4">
                        <p
                          className="max-w-64 truncate font-medium text-white"
                          title={project.title}
                        >
                          {project.title}
                        </p>

                        <p
                          className="mt-1 max-w-80 truncate text-sm text-slate-400"
                          title={project.shortDescription}
                        >
                          {project.shortDescription}
                        </p>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-400">
                        {project.slug}
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-300">
                        {project.displayOrder}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button
                          type="button"
                          aria-label={`Editar ${project.title}`}
                          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-700 hover:text-blue-400"
                        >
                          <FaEdit />
                          Editar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
