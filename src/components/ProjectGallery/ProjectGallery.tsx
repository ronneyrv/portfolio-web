import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import type { ProjectImage } from "../../types/Projects";
import ProjectImageComponent from "../ProjectImage/ProjectImage";

interface ProjectGalleryProps {
  images: ProjectImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="w-full min-w-0">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="w-full"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <ProjectImageComponent
              src={image.imageUrl}
              alt={image.altText ?? "Project image"}
              variant="gallery"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
