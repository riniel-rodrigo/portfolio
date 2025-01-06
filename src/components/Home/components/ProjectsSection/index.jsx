import styled from "styled-components";
import Image from "next/image";
import { useTheme } from "../../../commons/Context/ThemeContext.jsx";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { mockProjects } from "@/mocks/mockProjects.jsx";
import { mockProjectsOthers } from "@/mocks/mockProjectsOthers.jsx";

import * as S from "./style.js";

const CaroulselSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    color: #7e49d9;
    @media (max-width: 600px) {
      display: none;
    }
  }

  .swiper-pagination-bullet {
    background-color: ${({ props }) =>
      props === "light" ? "#3C096C" : "#C77DFF"};
  }
`;

export const Projects = () => {
  const [projects, setProjects] = useState(mockProjects);
  const [projectsOthers, setProjectsOthers] = useState(mockProjectsOthers);
  const { $backgroundTheme } = useTheme();

  return (
    <S.ProjectsMain>
      <S.ProjectsContainer>
        <CaroulselSwiper
          props={$backgroundTheme}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <S.Project>
                <S.divLeft>
                  <Image
                    src={project.image.url}
                    alt={project.image.alt}
                    width={project.name === "Mindly" ? 280 : 400}
                    height={project.name === "Mindly" ? 250 : 250}
                    className={project.name === "Mindly" ? "mindly-image" : ""}
                    unoptimized
                  />
                  <S.divBadges>
                    <span>{project.badge1}</span>
                    <span>{project.badge2}</span>
                    <span>{project.badge3}</span>
                  </S.divBadges>
                </S.divLeft>
                <S.divRight>
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                  <div>
                    {project.gitButton}
                    {project.deployButton}
                  </div>
                </S.divRight>
              </S.Project>
            </SwiperSlide>
          ))}
        </CaroulselSwiper>
      </S.ProjectsContainer>

      <S.Title>Outros projetos</S.Title>

      <S.ProjectsContainerOthers>
        {projectsOthers.map((projectsOthers) => (
          <S.CardProjects>
            <S.divLeft>
              <Image
                src={projectsOthers.image.url}
                alt={projectsOthers.image.alt}
                width={250}
                height={150}
                unoptimized
              />
              <S.divBadges>
                <span>{projectsOthers.badge1}</span>
                <span>{projectsOthers.badge2}</span>
                <span>{projectsOthers.badge3}</span>
              </S.divBadges>
            </S.divLeft>
            <S.cardInfo>
              <h1>{projectsOthers.name}</h1>
              <p>{projectsOthers.description}</p>
              <div>
                {projectsOthers.gitButton}
                {projectsOthers.deployButton}
              </div>
            </S.cardInfo>
          </S.CardProjects>
        ))}
      </S.ProjectsContainerOthers>
    </S.ProjectsMain>
  );
};
