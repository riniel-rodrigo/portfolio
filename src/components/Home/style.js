import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:10rem;
  width: 100%;
  margin-top: 6.5rem;

  @media screen and (max-width: 860px) {
    margin-top: 2rem;
    gap:5rem;
  }
`;