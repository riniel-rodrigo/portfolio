import styled from "styled-components";

export const divThemeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  & > * {
    display:flex;
    font-size: 1.3rem;
    transition: all 0.3s;
    &:hover {
      cursor: pointer;
      color: #7e49d9;
    }

    @media screen and (max-width: 475px) {
      margin-bottom: 0.2rem;
    }
  }
`;
