import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 90%;
  max-width:90rem;

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-direction: column;
    position: relative;

    @media screen and (max-width: 475px) {
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    img {
      object-fit: cover;
      border-radius: 1rem;
      height: 15.625rem;
      margin-bottom: 1rem;
      box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);

      @media screen and (min-width: 1366px) {
        width: 18.75rem;
        height: 18.75rem;
    }
    }
  }
`;

export const divIndex = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  position:absolute;
  bottom: 1.25rem;
  right:-1.25rem;
  width:3rem;
  height:3rem;
  font-size: 1.5rem;
  background-color: #7e49d9;
  border-radius: 0.75rem;
`;
