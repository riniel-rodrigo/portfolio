import styled from "styled-components";

export const ContainerAboutMe = styled.div`
  display: flex;
  gap: 5rem;
  width: 80%;
  max-width:77rem;

  @media screen and (max-width: 1280px) {
    width: 90%;
    gap: 2rem;
  }
`;

export const divLeft = styled.div`
  .circle {
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #10002b;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    background-color: black;
  }

  .circle img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const divRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }

  div{
    max-width:46rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  p {
    font-size:1rem;
    line-height: 1.5rem;
    font-weight:300;
  }
`;

export const BadgeDiv = styled.div`
  @media screen and (max-width: 475px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media screen and (max-width: 340px) {
    width: 22rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    height: 100%;
  }
  li {
    padding: 0.4rem;
    border-radius: 0.375rem;
    font-size: 0.9rem;
  }
`;
