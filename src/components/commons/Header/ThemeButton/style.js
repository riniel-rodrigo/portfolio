import styled from "styled-components";

export const divThemeIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & > * {
    transition: all 0.3s ease;
    font-size: 1.3rem;

    &:hover {
      cursor: pointer;
      color: #7e49d9;
    }

    @media screen and (max-width: 475px) {
      margin-bottom:0.2rem;
    }

  }
`;