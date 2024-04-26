import styled from "styled-components";

export const Button = styled.a`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:0.5rem;
  width: fit-content;
  padding: ${(props) => props.$PaddingSm ? "0.4rem" : "0.6rem"};
  margin-top: 0.5rem;
  color: ${(props) => 
    props.$dark ?
    (props.$backgroundTheme === "light" ? "#202124" : "#FFF")
    :
    (props.$backgroundTheme === "light" ? "#FFF" : "#FFF")
  };

  background-color: ${(props) =>
    props.$dark ?
    (props.$backgroundTheme === "light" ? "#edf2f4" : "#202124")
    :
    (props.$backgroundTheme === "light" ? "#7e49d9" : "#7e49d9")
  };
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 0.5rem;
  border: solid 0.124rem #7e49d9;
  transition: all 0.3s ease;
  cursor: pointer;

  @media screen and (max-width: 333px) {
    font-size: 0.6rem;
  }

  &:hover {
    border: solid 0.124rem #7e49d9;

    color: ${(props) => 
    props.$dark ?
    (props.$backgroundTheme === "light" ? "#FFF" : "#7e49d9")
    :
    (props.$backgroundTheme === "light" ? "#202124" : "#7e49d9")
  };

  background-color: ${(props) =>
    props.$dark ?
    (props.$backgroundTheme === "light" ? "#7e49d9" : "#202124")
    :
    (props.$backgroundTheme === "light" ? "#edf2f4" : "#202124")
  };
  }
`;
