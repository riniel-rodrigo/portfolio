import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5rem;

  @media screen and (max-width: 860px) {
    margin-top: 4rem;
  }

  @media screen and (max-width: 420px) {
    margin-top: 2rem;
  }
`;

export const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 75%;

  @media screen and (max-width: 1280px) {
    width: 85%;
  }

  @media screen and (max-width: 700px) {
    gap: 4rem;
  }

  @media screen and (max-width: 475px) {
    width: 90%;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  width: 100%;
  max-width: 75rem;
`;

export const divTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    font-weight: 500;

    @media screen and (max-width: 450px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 337px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 300px) {
      text-align: center;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin-top: 0.4rem;
    @media screen and (max-width: 337px) {
      margin-top: 0.3rem;
    }

    :hover {
      color: #7e49d9;
      cursor: pointer;
    }

    & > * {
      transition: all 0.3s ease;
      font-size: 1.563rem;
      @media screen and (max-width: 337px) {
        font-size: 1.3rem;
      }
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.8rem;
  height: 100%;
  width: 100%;

  li {
    display: flex;
    align-items: end;
    gap: 0.5rem;
    width: 100%;
  }

  li a {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 0.25rem;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
`;

export const divItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    font-size: 2rem;
    color: #7e49d9;
  }

  span {
    font-weight: 600;
  }
`;

export const divLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  transition: all 0.3s ease;

  span {
    font-size: 0.9rem;
    white-space: nowrap;
    text-decoration: underline;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const divUlLetter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

export const DivLetterImg = styled.div`
  display: flex;
  align-items: start;

  & > * {
    @media screen and (max-width: 1145px) {
      width: 15.625rem;
      height: 15.625rem;
    }
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const footer = styled.footer`
  p {
    margin-top: 5rem;
    margin-bottom: 1rem;
    font-size: 0.813rem;
    font-weight: 100;
    text-align: center;
  }
`;