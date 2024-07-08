import styled from "styled-components";

export const BadgeDiv = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 475px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  li {
    padding: 0.4rem;
    border-radius: 0.375rem;
    font-size: 0.9rem;
    color: ${(props) => props.color ? props.color : "#000000"};
    background-color: ${(props) => props.background ? props.background : "#000000"};

    @media screen and (max-width: 475px) {
      font-size: 0.666rem;
    }
  }
`;