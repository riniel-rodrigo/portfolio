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
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width:28rem;
  height: 100%;
  /* border: solid 1px yellow; */
`;

export const divTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }

  span {
    width: fit-content;
    padding: 0.4rem;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    background-color: #202124;
    border-radius: 0.3rem;
    border: solid 1.75px #7e49d9;
    transition: all 0.3s ease;
  }

  span:hover {
    background-color: #7e49d9;
    border: solid 1.75px #7e49d9;
    cursor: pointer;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;

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
  span {
    font-size: 0.9rem;
    text-decoration: underline;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: opacity 0.3s ease-out;
  }
`;

export const iconCopy = styled.div`
  cursor: pointer;

  & > * {
    transition: all 0.3s ease;
  }

  & > *:hover {
    color: #7e49d9;
  }
`;

//Estilização do Formulário//////////////////////////////

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media screen and (max-width: 1145px) {
    width:100%;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 1145px) {
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    gap:5rem;
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
    width:30rem;
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
    flex-direction:column;
    justify-content:space-between;
    width:30rem;
  }
`;

export const divSend = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;
