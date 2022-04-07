import styled from "styled-components";
//useDispatch lets us update global state (through redux) with actions
import { useDispatch } from "react-redux";
import { useState } from "react";

const DisplayOptionsForm = (props) => {
  const [formValues, setFormValues] = useState({ multiplier: 0, limit: 0 });

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    //doing preventDefault leaves the user-submitted values in the form fields,
    //which is good so they can remember their inputs.
    e.preventDefault();
    dispatch({
      type: "NEWMULTIPLIERANDLIMIT",
      payload: formValues,
    });
  };

  return (
    <StyForm onSubmit={onSubmit}>
      <div>
        <StyLabel htmlFor="quantity" data-testid="multiplier-label">
          Multiplier:
        </StyLabel>
        <StyInput
          type="number"
          name="multiplier"
          value={formValues.multiplier}
          onChange={(e) => {
            setFormValues({
              ...formValues,
              multiplier: Number(e.target.value),
            });
          }}
          data-testid="multiplier-StyInput"
        ></StyInput>
      </div>

      <div>
        <StyLabel
          htmlFor="quantity"
          value={formValues.limit}
          data-testid="display-limit-label"
        >
          Limit:
        </StyLabel>
        <StyInput
          type="number"
          name="limit"
          value={formValues.limit}
          onChange={(e) => {
            setFormValues({ ...formValues, limit: Number(e.target.value) });
          }}
          data-testid="display-limit-StyInput"
        ></StyInput>
      </div>

      <div>
        <StyInput type="submit" data-testid="form-submit-button"></StyInput>
      </div>
    </StyForm>
  );
};

export default DisplayOptionsForm;

const StyForm = styled.form`
  background-color: #bef8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2%;
`;

const StyLabel = styled.label`
  color: black;
`;

const StyInput = styled.input`
  color: black;
`;
