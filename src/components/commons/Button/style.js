import styled from "styled-components";

export const Button = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:0.5rem;
  width: fit-content;
  padding: 0.6rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: #7e49d9;
  background-color: ${(props) => (props.dark ? "#202124" : "#7e49d9")};
  border-radius: 0.5rem;
  border: solid 0.124rem #7e49d9;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>props.dark ? "#7e49d9" : "rgba(75, 85, 99, 0.1)"};
    border: solid 0.124rem #7e49d9;
  }
`;
