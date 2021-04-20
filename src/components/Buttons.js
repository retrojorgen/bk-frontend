import styled from "styled-components";

const Button = styled.button`
  background-color: var(--blue);
  color: var(--white);
  display: inline-block;
  font-weight: 600;
  font-size: 1.125rem;
  text-align: center;
  border: 3px solid transparent;
  border-radius: 7px;
  padding: 14px 18px;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    background-color: var(--lightBlue);
    border-color: var(--darkBlue);
    color: var(--darkBlue);
  }
`;

const ResetButton = styled(Button)`
  background-color: var(--lightBlue);
  color: var(--darkBlue);
`;

const SmallButton = styled(Button)`
  font-size: 0.9rem;
  padding: 10px 10px;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  display: inline-block;
  background-color: transparent;
  padding: 3px;
  font-size: 0.9375rem;
  font-weight: 700;
  border: 0;
  color: var(--darkBlue);
  &:hover {
    background-color: var(--lightBlue);
  }
  transition: background-color 0.15s ease-in-out;
`;

export { Button, SmallButton, DeleteButton, ResetButton };
