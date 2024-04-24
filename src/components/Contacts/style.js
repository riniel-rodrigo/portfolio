import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
`;

export const ContainerContacts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  flex-wrap: wrap-reverse;

  @media screen and (max-width: 1145px) {
    gap: 2rem;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 700px) {
    width: 87%;
    gap: 4rem;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 28rem;
  height: 100%;

  @media screen and (max-width: 1145px) {
    width: 100%;
  }
`;

export const divTitle = styled.div`
  display: flex;
  align-items: center;
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
      transition:all 0.3s ease;
      font-size:1.563rem;
      @media screen and (max-width: 337px) {
        font-size: 1.3rem;
      }
    }



    /* padding: 0.4rem;
    font-size: 0.8rem;
    font-weight: 500;
    background-color: #202124;
    border-radius: 0.3rem;
    border: solid 1.75px #7e49d9;
    transition: all 0.3s ease;

    @media screen and (max-width: 450px) {
      font-size: 0.6rem;
    } */
  }

  /* span:hover {
    background-color: #7e49d9;
    border: solid 1.75px #7e49d9;
    cursor: pointer;
  } */
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;

  @media screen and (max-width: 1145px) {
    width: 25rem;
  }

  @media screen and (max-width: 4705px) {
    width: 100%;
  }

  li {
    display: flex;
    align-items: end;
    gap: 0.5rem;
  }

  li a {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 0.25rem;
    width: 100%;
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

  @media screen and (max-width: 450px) {
    width: 100%;
  }

  span {
    font-size: 0.9rem;
    white-space: nowrap;
    text-decoration: underline;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const divLinkIcon = styled.div`
  border: solid 2px yellow;
`;

export const divUlLetter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 1145px) {
  }
`;

export const DivLetterImg = styled.div`
  display: none;

  @media screen and (max-width: 1145px) {
    display: block;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

//Estilização do Formulário//////////////////////////////
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 1145px) {
    width: 100%;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 1145px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 5rem;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const FieldUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 86%;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  input {
    all: unset;
    padding: 0.6rem;
    color: #000;
    background-color: #f0ece6;
    border-radius: 0.4rem;
  }

  @media screen and (max-width: 1145px) {
    width: 30rem;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const divTextArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  width: 100%;

  div {
    gap: 0.4rem;
    display: flex;
    flex-direction: column;
  }

  textarea {
    all: unset;
    padding: 0.6rem;
    height: 5rem;
    color: #000;
    background-color: #f0ece6;
    border-radius: 0.5rem;
    overflow-y: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  @media screen and (max-width: 1145px) {
    flex-direction: column;
    justify-content: space-between;
    width: 30rem;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const divSend = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;

  @media screen and (max-width: 700px) {
    align-items: start;
  }
`;
