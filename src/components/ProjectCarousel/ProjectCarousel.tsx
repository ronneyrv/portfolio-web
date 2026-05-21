import { Swiper, SwiperSlide } from "swiper/react";
import type { Project } from "../../types/Projects";
import ProjectCard from "../ProjectCard/ProjectCard";

interface Props {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: Props) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
