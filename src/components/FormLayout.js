import styled from "styled-components";

const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 0 1rem 0;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--black);
`;

const Legend = styled.legend`
  font-size: 1.125rem;
  line-height: 26px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  span {
    margin-right: 20px;
  }
`;

const Input = styled.input`
  font-size: 1.125rem;
  border: 2px solid var(--black);
  background-color: transparent;
  -webkit-appearance: none;
  box-shadow: none;
  padding: 7.5px 10px;
  line-height: 1.5;
  position: relative;
  max-width: 100%;
  color: var(--black);
`;

const InputRow = styled.div`
  padding: 1rem;
`;

export { Fieldset, Legend, Label, Input, InputRow };
