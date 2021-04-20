// handles form list

import { SmallButton, DeleteButton } from "./Buttons";
import { Input, Label, InputRow } from "./FormLayout";

function FormList({ records, setRecords }) {
  function addRecord() {
    setRecords([...records, { km: 0, antall: 0 }]);
  }

  return (
    <>
      {records.map((record, key) => (
        <InputRow key={key}>
          <Label>
            <span>Distance (km):</span>
            <Input
              type="number"
              placeholder="km"
              value={record.km}
              onChange={(e) =>
                setRecords(
                  records.map((record, index) =>
                    index === key ? { ...record, km: e.target.value } : record
                  )
                )
              }
            />
          </Label>
          <Label>
            <span>Number of trips:</span>
            <Input
              type="number"
              placeholder="amount"
              value={record.antall}
              onChange={(e) =>
                setRecords(
                  records.map((record, index) =>
                    index === key
                      ? { ...record, antall: e.target.value }
                      : record
                  )
                )
              }
            />
          </Label>
          <DeleteButton
            type="button"
            onClick={() =>
              setRecords(records.filter((record, index) => index !== key))
            }
          >
            - remove
          </DeleteButton>
        </InputRow>
      ))}
      <SmallButton type="button" onClick={addRecord}>
        + Add work location
      </SmallButton>
    </>
  );
}

export default FormList;
