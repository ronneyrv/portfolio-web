import { useState } from "react";
import { optimizeImage } from "../../utils/cloudinary";

interface Props {
  src: string;
  alt: string;
  variant?: "default" | "gallery";
}

export default function ProjectImage({ src, alt, variant = "default" }: Props) {
  const [error, setError] = useState(false);

  const fallback = "https://placehold.co/800x400/0f172a/ffffff?text=Project";

  return (
    <div
      className={`relative
      ${variant === "gallery" ? "min-h-105 lg:min-h-130" : "h-56"}
      ${variant === "gallery" ? "" : "bg-slate-100"}
      flex
      items-center
      justify-center
      overflow-hidden`}
    >
      <img
        src={error ? fallback : optimizeImage(src)}
        alt={alt}
        onError={() => setError(true)}
        className="w-full h-full object-contain p-2"
      />
    </div>
  );
}
