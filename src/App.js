// Main application, draws forms and owns state

import { useState } from "react";
import getData from "./api";
import FormList from "./components/FormList";
import {
  Legend,
  Fieldset,
  Label,
  Input,
  InputRow,
} from "./components/FormLayout";

import { Button, ResetButton } from "./components/Buttons";

import styled from "styled-components";

const FormWrapper = styled.div`
  width: 550px;
  max-width: 100%;
  h1 {
    font-size: 2.25rem;
    margin-bottom: 2rem;
  }
  .lead {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-bottom: 2rem;
  }

  .controls {
    button:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

function App() {
  let [workTravel, setWorkTravel] = useState([]);
  let [visitTravel, setVisitTravel] = useState([]);
  let [expenses, setExpenses] = useState([]);
  let [calculatedDeducation, setCalculatedDeducation] = useState(0);

  function resetData() {
    setWorkTravel([]);
    setVisitTravel([]);
    setExpenses(0);
    setCalculatedDeducation(0);
  }

  async function calculateDeduction(e) {
    e.preventDefault();
    let calculatedResponse = await getData({
      arbeidsreiser: workTravel,
      besoeksreiser: visitTravel,
      utgifterBomFergeEtc: expenses,
    });
    setCalculatedDeducation(calculatedResponse.reisefradrag);
  }

  return (
    <FormWrapper>
      <section>
        <h1>Calculate travel deduction for travel between home and work</h1>
        <p className="lead">
          This will calculate how much you can claim in travel deduction between
          your home and workplace. The calculator shows the rates for the income
          year 2020, for use with the tax return you submit in 2021.
        </p>
        <form onSubmit={(e) => calculateDeduction(e)}>
          <Fieldset>
            <Legend>Number of travelling days per year to the workplace</Legend>
            <FormList
              title=""
              records={workTravel}
              setRecords={setWorkTravel}
            />
          </Fieldset>

          <Fieldset>
            <Legend>
              Number of travelling days per year to other locations
            </Legend>
            <FormList records={visitTravel} setRecords={setVisitTravel} />
          </Fieldset>
          <Fieldset>
            <Legend>
              Number of travelling days per year to other locations
            </Legend>
            <InputRow>
              <Label>
                <span>Input in NOK:</span>
                <Input
                  type="number"
                  placeholder="amount"
                  value={expenses}
                  onChange={(e) => setExpenses(e.target.value)}
                />
              </Label>
            </InputRow>
          </Fieldset>
          <div className="controls">
            <Button type="submit">Calculate</Button>
            <ResetButton type="submit" onClick={resetData} className="reset">
              Tilbakestill
            </ResetButton>
          </div>
        </form>
      </section>
      <section>
        <h1>Calculated deduction</h1>
        <p className="lead">{calculatedDeducation} NOK</p>
      </section>
    </FormWrapper>
  );
}

export default App;
