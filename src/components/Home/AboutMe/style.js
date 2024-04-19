import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 6.5rem;

  @media screen and (max-width: 860px) {
    margin-top: 2rem;
  }
`;

export const AboutmeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;

  @media screen and (max-width: 1280px) {
    width: 85%;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
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
  justify-content: space-between;
  flex-direction: column;
  width: 70%;
  height: 20rem;

  @media screen and (max-width: 860px) {
    width: 90%;
    height: 21rem;
  }

  @media screen and (max-width: 475px) {
    width: 95%;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;

  @media screen and (max-width: 475px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media screen and (max-width: 340px) {
    width: 20rem;
  }

  a {
    width: fit-content;
    padding: 0.6rem;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    background-color: #7e49d9;
    border-radius: 0.5rem;
    border: solid 1.75px #7e49d9;
    transition: all 0.3s ease;
  }

  a:hover {
    background-color: rgba(75, 85, 99, 0.1);
    border: solid 1.75px #7e49d9;
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
  }

  span {
    font-size: 3.25rem;
    font-weight: 600;

    @media screen and (max-width: 475px) {
      font-size: 2.5rem;
    }
  }

  p {
    @media screen and (max-width: 475px) {
      text-align: center;
    }
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

export const AboutmeDivRight = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 30%;

  @media screen and (max-width: 860px) {
    width: 100%;
  }
  @media screen and (max-width: 340px) {
    width: 400px;
    justify-self:end;
  } 

  & > * {
    @media screen and (max-width: 475px) {
      width:320px;
      height:200px;
    }
  }
  /* .circle {
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #10002b;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    background-color:black;
  }

  .circle img {
    display: block;
    width: 100%;
    height: auto;
  } */
`;
