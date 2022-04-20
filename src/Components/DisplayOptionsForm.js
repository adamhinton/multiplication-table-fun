import styled from "styled-components";
//useDispatch lets us update global state (through redux) with actions
import { useDispatch } from "react-redux";
import { useState } from "react";

import { useSelector } from "react-redux";
const selectState = (state) => state;
//TODO: Put pokemon display toggle option in here, dispatch that on submit, make it toggle pokemon pictures

const DisplayOptionsForm = (props) => {
  const stateValues = useSelector(selectState);

  const [formValues, setFormValues] = useState(stateValues);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    //doing preventDefault leaves the user-submitted values in the form fields,
    //which is good so they can remember their inputs.
    e.preventDefault();
    dispatch({
      type: "NEWMULTIPLIERANDLIMIT",
      payload: formValues.tableValues,
    });
    dispatch({
      type: "TOGGLEPOKEMONDISPLAYOPTION",
      payload: formValues.displayPokemon.isDisplayPokemon,
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
          value={formValues.tableValues.multiplier}
          onChange={(e) => {
            e.preventDefault();
            setFormValues({
              ...formValues,
              tableValues: {
                limit: formValues.tableValues.limit,
                multiplier: Number(e.target.value),
              },
            });
          }}
          data-testid="multiplier-input"
        ></StyInput>
      </div>

      <div>
        <StyLabel
          htmlFor="quantity"
          value={formValues.tableValues.limit}
          data-testid="display-limit-label"
        >
          Limit:
        </StyLabel>
        <StyInput
          type="number"
          name="limit"
          value={formValues.tableValues.limit}
          onChange={(e) => {
            e.preventDefault();
            setFormValues({
              ...formValues,
              tableValues: {
                multiplier: formValues.tableValues.multiplier,
                limit: Number(e.target.value),
              },
            });
          }}
          data-testid="display-limit-input"
          min={1}
          max={300}
        ></StyInput>
      </div>

      <div>
        <StyLabel
          htmlFor="checkbox"
          // value={formValues.displayPokemon.isDisplayPokemon}
        >
          Display Pokemon:
        </StyLabel>
        <StyInput
          type="checkbox"
          name="checkbox"
          value={formValues.displayPokemon.isDisplayPokemon}
          onChange={(e) => {
            setFormValues({
              ...formValues,
              displayPokemon: {
                // isDisplayPokemon: !formValues.displayPokemon.isDisplayPokemon;
                isDisplayPokemon: e.target.checked,
              },
            });
          }}
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
  align-items: center;
  padding-top: 2%;
`;

const StyLabel = styled.label`
  color: black;
`;

const StyInput = styled.input`
  color: black;
`;
