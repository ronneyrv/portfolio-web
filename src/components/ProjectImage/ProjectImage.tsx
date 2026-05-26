import { useState } from "react";
import { optimizeImage } from "../../utils/cloudinary";

interface Props {
  src: string;
  alt: string;
}

export default function ProjectImage({ src, alt }: Props) {
  const [error, setError] = useState(false);

  const fallback = "https://placehold.co/800x400/0f172a/ffffff?text=Project";

  return (
    <div className="relative
  h-56
  bg-slate-100
  flex
  items-center
  justify-center
  overflow-hidden">
      <img
        src={error ? fallback : optimizeImage(src)}
        alt={alt}
        onError={() => setError(true)}
        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-120"
      />
    </div>
  );
}
