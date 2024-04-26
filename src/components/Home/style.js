import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  width: 100%;
  margin-top: 6.5rem;

  @media screen and (max-width: 860px) {
    gap: 5rem;
    margin-top: 2rem;
  }

  & > * {
    @media screen and (max-width: 475px) {
      width: 90%;
    }
  }
`;

export const ProjectsTitle = styled.div`
  width: 100%;
  h2 {
    margin-bottom: 4rem;
    font-size: 2.25rem;
    font-weight: 500;
    text-align: center;
  }
`;
