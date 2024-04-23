import styled from "styled-components";

export const AboutmeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  width: 75%;
  height: 100%;
  max-width: 75rem;

  @media screen and (max-width: 1280px) {
    width: 85%;
    gap: 1rem;
  }

  @media screen and (max-width: 860px) {
    flex-wrap: wrap-reverse;
    justify-content: center;
    gap: 1.5rem;
    width: 85%;
  }
`;

export const AboutmeDivLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 400px) {
    justify-content: center;
    align-items: center;
  }

  h1 {
    display: flex;
    flex-direction: column;
    font-size: 2.25rem;
    font-weight: 500;

    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 400px) {
      text-align: center;
    }

    span {
      font-size: 3rem;
      font-weight: 500;

      @media screen and (max-width: 600px) {
        font-size: 2rem;
      }
    }
  }

  p {
    line-height: 1.5rem;
    max-width: 45rem;
    font-weight: 300;
    text-align: justify;

    @media screen and (max-width: 475px) {
      text-align: justify;
    }
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;

export const AboutmeDivRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;

  @media screen and (max-width: 860px) {
    position: relative;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 400px) {
    display: none;
  }

  div {
    @media screen and (max-width: 860px) {
      position: absolute;
      top: 1rem;
      right: -2rem;
    }

    @media screen and (max-width: 600px) {
      top: -1rem;
      right: -3rem;
    }
  }

  div img {
    object-fit: cover;

    @media screen and (max-width: 1024px) {
      width: 23rem;
      height: 15rem;

      @media screen and (max-width: 860px) {
        width: 12rem;
        height: 7rem;
      }
    }
  }
`;
