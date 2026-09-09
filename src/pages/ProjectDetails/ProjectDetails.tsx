import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <section className="w-full grow px-8 lg:px-20 py-10">
      <h1 className="text-center text-4xl font-bold mb-10">Project: {slug}</h1>
    </section>
  );
}
