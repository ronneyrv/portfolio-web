import { useEffect, useRef, useState } from "react";
import type { SubmitEventHandler } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  findProjectById,
  updateProject,
  createProjectImage,
  updateProjectImage,
  deleteProjectImage,
} from "../../services/projectsApi";
import type { Project, ProjectImage } from "../../types/Projects";

export default function AdminProjectEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [demoUrl, setDemoUrl] = useState("");
  const [displayOrder, setDisplayOrder] = useState("");

  const [image, setImage] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<File[]>([]);

  const [editingImageId, setEditingImageId] = useState<number | null>(null);
  const [editingImageFile, setEditingImageFile] = useState<File | null>(null);
  const [editingAltText, setEditingAltText] = useState("");
  const [editingDisplayOrder, setEditingDisplayOrder] = useState("");

  const [galleryLoading, setGalleryLoading] = useState(false);
  const [galleryError, setGalleryError] = useState("");

  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [galleryUploadProgress, setGalleryUploadProgress] = useState(0);

  const galleryInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProject() {
      if (!id) {
        setError("Projeto não encontrado.");
        setLoading(false);
        return;
      }

      try {
        const data = await findProjectById(Number(id));

        setProject(data);

        setTitle(data.title);
        setShortDescription(data.shortDescription);
        setDescription(data.description);
        setGithubUrl(data.githubUrl);
        setDemoUrl(data.demoUrl ?? "");
        setDisplayOrder(String(data.displayOrder));
      } catch (error) {
        console.error("Error loading project:", error);
        setError("Não foi possível carregar o projeto.");
      } finally {
        setLoading(false);
      }
    }

    loadProject();
  }, [id]);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (!id) {
      setError("Projeto não encontrado.");
      return;
    }

    try {
      await updateProject(Number(id), {
        title,
        slug,
        shortDescription,
        description,
        image,
        githubUrl,
        demoUrl,
        displayOrder: Number(displayOrder),
      });

      navigate("/admin");
    } catch (error) {
      console.error("Error updating project:", error);
      setError("Não foi possível atualizar o projeto.");
    }
  };

  if (loading) {
    return (
      <section className="grow px-8 py-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-slate-400">Carregando projeto...</p>
        </div>
      </section>
    );
  }

  if (error || !project) {
    return (
      <section className="grow px-8 py-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-red-400">{error || "Projeto não encontrado."}</p>
        </div>
      </section>
    );
  }

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

  const slug = generateSlug(title);

  async function handleAddGalleryImages() {
    if (!id || galleryImages.length === 0) {
      return;
    }

    setGalleryLoading(true);
    setGalleryError("");

    try {
      const currentImageCount = project?.images.length ?? 0;

      setUploadingGallery(true);
      setGalleryUploadProgress(0);

      for (const [index, image] of galleryImages.entries()) {
        const createdImage = await createProjectImage(Number(id), {
          image,
          altText: "",
          displayOrder: currentImageCount + index + 1,
        });

        setProject((current) =>
          current
            ? {
                ...current,
                images: [...current.images, createdImage],
              }
            : current,
        );

        setGalleryUploadProgress(index + 1);
      }

      setGalleryImages([]);

      if (galleryInputRef.current) {
        galleryInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error adding gallery images:", error);
      setGalleryError("Não foi possível adicionar as imagens.");
    } finally {
      setUploadingGallery(false);
      setGalleryUploadProgress(0);
      setGalleryLoading(false);
    }
  }

  function handleEditImage(projectImage: ProjectImage) {
    setEditingImageId(projectImage.id);
    setEditingImageFile(null);
    setEditingAltText(projectImage.altText ?? "");
    setEditingDisplayOrder(String(projectImage.displayOrder));
    setGalleryError("");
  }

  function handleCancelEditImage() {
    setEditingImageId(null);
    setEditingImageFile(null);
    setEditingAltText("");
    setEditingDisplayOrder("");
  }

  async function handleUpdateImage() {
    if (!editingImageId || !id) {
      return;
    }

    setGalleryLoading(true);
    setGalleryError("");

    try {
      const updatedImage = await updateProjectImage(
        Number(id),
        editingImageId,
        {
          image: editingImageFile ?? undefined,
          altText: editingAltText,
          displayOrder: Number(editingDisplayOrder),
        },
      );

      setProject((currentProject) => {
        if (!currentProject) {
          return currentProject;
        }

        return {
          ...currentProject,
          images: currentProject.images.map((image) =>
            image.id === updatedImage.id ? updatedImage : image,
          ),
        };
      });

      handleCancelEditImage();
    } catch (error) {
      console.error("Error updating project image:", error);
      setGalleryError("Não foi possível atualizar a imagem.");
    } finally {
      setGalleryLoading(false);
    }
  }

  async function handleDeleteImage(imageId: number) {
    const confirmed = window.confirm(
      "Tem certeza que deseja excluir esta imagem?",
    );

    if (!confirmed || !id) {
      return;
    }

    setGalleryLoading(true);
    setGalleryError("");

    try {
      await deleteProjectImage(Number(id), imageId);

      setProject((currentProject) => {
        if (!currentProject) {
          return currentProject;
        }

        return {
          ...currentProject,
          images: currentProject.images.filter((image) => image.id !== imageId),
        };
      });
    } catch (error) {
      console.error("Error deleting project image:", error);
      setGalleryError("Não foi possível excluir a imagem.");
    } finally {
      setGalleryLoading(false);
    }
  }

  return (
    <section className="grow px-8 py-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Editar projeto</h1>
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

            <div className="mb-4">
              <div className="flex h-48 w-80 items-center justify-center overflow-hidden rounded-lg border border-slate-700 bg-slate-950">
                <img
                  src={
                    image ? URL.createObjectURL(image) : project.coverImageUrl
                  }
                  alt={project.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={(event) => setImage(event.target.files?.[0] ?? null)}
              className="block w-full cursor-pointer rounded-lg border border-slate-700 bg-slate-800 text-sm text-slate-400 file:mr-4 file:border-0 file:bg-slate-700 file:px-4 file:py-3 file:text-sm file:font-medium file:text-white hover:file:bg-slate-600"
            />

            <p className="mt-2 text-xs text-slate-500">
              Se nenhuma nova imagem for selecionada, a imagem atual será
              mantida.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-medium text-slate-300">
              Galeria de imagens
            </h2>

            {galleryError && (
              <p className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {galleryError}
              </p>
            )}

            {project.images.length === 0 ? (
              <p className="text-sm text-slate-500">
                Nenhuma imagem adicionada à galeria.
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.images.map((projectImage) => {
                  const isEditing = editingImageId === projectImage.id;

                  return (
                    <div
                      key={projectImage.id}
                      className="overflow-hidden rounded-lg border border-slate-700 bg-slate-950"
                    >
                      <div className="flex h-40 items-center justify-center p-2">
                        <img
                          src={
                            isEditing && editingImageFile
                              ? URL.createObjectURL(editingImageFile)
                              : projectImage.imageUrl
                          }
                          alt={projectImage.altText ?? project.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      {isEditing ? (
                        <div className="space-y-3 border-t border-slate-700 p-3">
                          <div>
                            <label className="mb-1 block text-xs text-slate-400">
                              Nova imagem
                            </label>

                            <input
                              type="file"
                              accept="image/*"
                              onChange={(event) =>
                                setEditingImageFile(
                                  event.target.files?.[0] ?? null,
                                )
                              }
                              className="block w-full text-xs text-slate-400"
                            />
                          </div>

                          <div>
                            <label className="mb-1 block text-xs text-slate-400">
                              Texto alternativo
                            </label>

                            <input
                              type="text"
                              value={editingAltText}
                              onChange={(event) =>
                                setEditingAltText(event.target.value)
                              }
                              maxLength={500}
                              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="mb-1 block text-xs text-slate-400">
                              Ordem
                            </label>

                            <input
                              type="number"
                              min="0"
                              value={editingDisplayOrder}
                              onChange={(event) =>
                                setEditingDisplayOrder(event.target.value)
                              }
                              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
                            />
                          </div>

                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={handleCancelEditImage}
                              className="rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white"
                            >
                              Cancelar
                            </button>

                            <button
                              type="button"
                              disabled={galleryLoading}
                              onClick={handleUpdateImage}
                              className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-500 disabled:opacity-50"
                            >
                              Salvar
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="border-t border-slate-700 p-3">
                          <p className="text-xs text-slate-500">
                            Ordem: {projectImage.displayOrder}
                          </p>

                          {projectImage.altText && (
                            <p className="mt-1 truncate text-sm text-slate-300">
                              {projectImage.altText}
                            </p>
                          )}

                          <div className="mt-3 flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleEditImage(projectImage)}
                              className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-blue-400"
                            >
                              Editar
                            </button>

                            <button
                              type="button"
                              disabled={galleryLoading}
                              onClick={() => handleDeleteImage(projectImage.id)}
                              className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-red-400 disabled:opacity-50"
                            >
                              Excluir
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="galleryImages"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Imagens da galeria
            </label>

            <input
              ref={galleryInputRef}
              id="galleryImages"
              name="galleryImages"
              type="file"
              accept="image/*"
              multiple
              onChange={(event) =>
                setGalleryImages(Array.from(event.target.files ?? []))
              }
              className="block w-full cursor-pointer rounded-lg border border-slate-700 bg-slate-800 text-sm text-slate-400 file:mr-4 file:border-0 file:bg-slate-700 file:px-4 file:py-3 file:text-sm file:font-medium file:text-white hover:file:bg-slate-600"
            />

            {uploadingGallery && (
              <div className="mt-3 rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-300">
                    Enviando imagens da galeria...
                  </span>

                  <span className="text-slate-400">
                    {galleryUploadProgress} de {galleryImages.length}
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all duration-300"
                    style={{
                      width: `${
                        galleryImages.length > 0
                          ? (galleryUploadProgress / galleryImages.length) * 100
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>
            )}

            {galleryImages.length > 0 && (
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs text-slate-500">
                  {galleryImages.length}{" "}
                  {galleryImages.length === 1
                    ? "imagem selecionada"
                    : "imagens selecionadas"}
                </p>

                <button
                  type="button"
                  disabled={galleryLoading}
                  onClick={handleAddGalleryImages}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {galleryLoading ? "Adicionando..." : "Adicionar imagens"}
                </button>
              </div>
            )}
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

          <div className="flex justify-end gap-3 border-t border-slate-800 pt-6">
            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="rounded-lg px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={uploadingGallery}
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              {uploadingGallery ? "Enviando imagens..." : "Salvar alterações"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
