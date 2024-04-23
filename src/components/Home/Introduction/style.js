import styled from "styled-components";

export const AboutmeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  width: 75%;
  height: 100%;
  max-width: 75rem;

  @media screen and (max-width: 1280px) {
    width: 90%;
    gap: 1rem;
  }

  @media screen and (max-width: 860px) {
    flex-wrap: wrap-reverse;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
  }

  @media screen and (max-width: 475px) {
    width: 100%;
  }
`;

export const AboutmeDivLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (max-width: 860px) {
    width: 90%;
  }

  @media screen and (max-width: 475px) {
    width: 95%;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 475px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media screen and (max-width: 340px) {
    width: 20rem;
  }

  h1 {
    display: flex;
    flex-direction: column;
    font-size: 2.25;
    font-weight: 500;

    @media screen and (max-width: 475px) {
      justify-content: center;
      align-items: center;
    }

    @media screen and (max-width: 340px) {
      white-space: nowrap;
    }

    span {
      font-size: 3rem;
      font-weight: 500;

      @media screen and (max-width: 475px) {
        font-size: 2.5rem;
      }
    }
  }

  p {
    line-height: 1.5rem;
    max-width:45rem;
    font-weight:300;
    @media screen and (max-width: 475px) {
      text-align: center;
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
    width: 100%;
  }
  @media screen and (max-width: 340px) {
    justify-self: end;
    width: 400px;
  }

  & > * {
    @media screen and (max-width: 475px) {
      width: 320px;
      height: 200px;
    }
  }
`;
