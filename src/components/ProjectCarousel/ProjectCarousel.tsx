import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ProjectCard from "../ProjectCard/ProjectCard";

import type { Project } from "../../types/Projects";

interface Props {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: Props) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      className="w-full"
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 3,
        },

        1440: {
          slidesPerView: 4,
        },
      }}
    >
      {projects.map(project => (
        <SwiperSlide key={project.id} className="flex h-auto mt-2">
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
