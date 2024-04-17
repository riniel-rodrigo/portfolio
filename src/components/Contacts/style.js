import styled from "styled-components";

export const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 30rem;   

  h1 {
    font-size: 2.7rem;
    font-weight: 500;
  }
`;

export const divTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
  }

  span {
    width: fit-content;
    padding: 0.4rem;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    background-color: #202124;
    border-radius: 0.3rem;
    border: solid 1.75px #7e49d9;
    transition: all 0.3s ease;
  }
  span:hover {
    background-color:#7e49d9;
    border: solid 1.75px #7e49d9;
    cursor: pointer;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 27%;

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
  /* border:2px solid red; */

  div {
    display: flex;
    font-size: 2rem;
    color: #7e49d9;
  }

  span {
    font-weight: 600;
  }
`;
