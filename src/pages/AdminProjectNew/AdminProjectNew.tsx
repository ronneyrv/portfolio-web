import { useState } from "react";
import type { SubmitEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../services/projectsApi";

function generateSlug(title: string) {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function AdminProjectNew() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [demoUrl, setDemoUrl] = useState("");
  const [displayOrder, setDisplayOrder] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const slug = generateSlug(title);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    setSubmitError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const image = formData.get("image");

    try {
      await createProject({
        title,
        slug,
        shortDescription,
        description,
        image: image instanceof File && image.size > 0 ? image : null,
        githubUrl,
        demoUrl,
        displayOrder: Number(displayOrder),
      });

      navigate("/admin");
    } catch (error) {
      console.error("Error creating project:", error);
      setSubmitError("Não foi possível criar o projeto.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="grow px-8 py-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Novo projeto</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-2xl border border-slate-700 bg-slate-900 p-6 lg:p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Título
              </label>

              <input
                id="title"
                name="title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="slug"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Slug
              </label>

              <input
                id="slug"
                name="slug"
                type="text"
                value={slug}
                readOnly
                className="w-full cursor-not-allowed rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-slate-400 outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="shortDescription"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Descrição curta
            </label>

            <textarea
              id="shortDescription"
              name="shortDescription"
              rows={3}
              value={shortDescription}
              onChange={(event) => setShortDescription(event.target.value)}
              className="w-full resize-y rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Descrição
            </label>

            <textarea
              id="description"
              name="description"
              rows={6}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="w-full resize-y rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Imagem de capa
            </label>

            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              //   onChange={(event) => setImage(event.target.files?.[0] ?? null)}
              className="block w-full cursor-pointer rounded-lg border border-slate-700 bg-slate-800 text-sm text-slate-400 file:mr-4 file:border-0 file:bg-slate-700 file:px-4 file:py-3 file:text-sm file:font-medium file:text-white hover:file:bg-slate-600"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="githubUrl"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                GitHub
              </label>

              <input
                id="githubUrl"
                name="githubUrl"
                type="url"
                value={githubUrl}
                onChange={(event) => setGithubUrl(event.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="demoUrl"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Demo
              </label>

              <input
                id="demoUrl"
                name="demoUrl"
                type="url"
                value={demoUrl}
                onChange={(event) => setDemoUrl(event.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>
          </div>

          <div className="max-w-xs">
            <label
              htmlFor="displayOrder"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Ordem de exibição
            </label>

            <input
              id="displayOrder"
              name="displayOrder"
              type="number"
              min="0"
              value={displayOrder}
              onChange={(event) => setDisplayOrder(event.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          {submitError && (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {submitError}
            </p>
          )}

          <div className="flex justify-end gap-3 border-t border-slate-800 pt-6">
            <button
              type="button"
              className="rounded-lg px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Criando..." : "Criar projeto"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
