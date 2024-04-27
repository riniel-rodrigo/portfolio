import styled from 'styled-components';
import Image from "next/image";
import { useTheme } from "../../../commons/Context/ThemeContext.jsx"
import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { mockProjects } from '@/mocks/mockProjects.jsx';

import * as S from "./style.js";

const CaroulselSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    color:#7E49D9;
    @media (max-width: 600px) {
      display: none;
    }
  }

  .swiper-pagination-bullet {
    background-color: ${({props}) => props === "light" ? "#3C096C" : "#C77DFF"};
  }
`;

export const Projects = () => {
  const [projects, setProjects] = useState(mockProjects);
  const { $backgroundTheme } = useTheme();

  return (
    <S.ProjectsMain>
      <S.ProjectsContainer>

        <CaroulselSwiper props={$backgroundTheme}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <S.Project>
                <S.divLeft>
                  <Image
                    src={project.image.url}
                    alt={project.image.alt}
                    width={400}
                    height={250}
                    unoptimized
                  />
                  <span>{project.badges}</span>
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
    </S.ProjectsMain>


  );
};