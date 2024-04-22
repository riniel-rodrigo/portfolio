import styled from "styled-components";

export const StyledLink = styled.div`
  text-decoration: none;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -0.127rem;
    left: 0;
    width: ${(props) => (props.isActive ? "100%" : "0")};
    height: 0.0625em;
    background-color: #dcdcdd;
    transition: all 0.5s ease;
  }
`;
