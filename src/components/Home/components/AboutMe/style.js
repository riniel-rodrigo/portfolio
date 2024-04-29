import styled from "styled-components";

export const ContainerAboutMe = styled.div`
  display: flex;
  gap: 4rem;
  width: 80%;
  height: 110%;
  max-width: 77rem;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }

  @media screen and (max-width: 1024px) {
    width: 95%;
    gap: 2rem;
  }

  @media screen and (max-width: 860px) {
    flex-direction: column;
    width: 85%;
  }
`;

export const divLeft = styled.div`
  display: flex;
  padding-top: 2rem;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  .circle {
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #10002b;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    background-color: black;
  }

  img {
    @media screen and (max-width: 1024px) {
      width: 15.625rem;
      height: 15.625rem;
    }

    @media screen and (max-width: 475px) {
      width: 12.5rem;
      height: 12.5rem;
    }

    @media screen and (max-width: 375px) {
      width: 10rem;
      height: 10rem;
    }
  }
`;

export const BadgeDiv = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 475px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    height: 100%;

    @media screen and (max-width: 1024px) {
      flex-wrap: wrap;
    }
  }
  li {
    padding: 0.4rem;
    border-radius: 0.375rem;
    font-size: 0.9rem;
  }
`;

export const divRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.8rem;
  text-align: justify;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 46rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 300;
  }
`;

export const fullP = styled.div`

`;

export const Preview = styled.div`
  filter: blur(0.05rem);
`;

export const viewMoreDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7e49d9;
  font-size: 0.9rem;
  font-weight: 400;
  cursor: pointer;
  z-index: 1;

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
