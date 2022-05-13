import styled from "styled-components";
//useDispatch lets us update global state (through redux) with actions
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

const selectState = (state) => state;

const DisplayOptionsForm = (props) => {
  //stateValues is pulled from redux state store
  const stateValues = useSelector(selectState);

  //updates any time a form input is changed (before hitting submit)
  const [formValues, setFormValues] = useState(stateValues);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    //updates Redux global state with new multiplier, limit and displayPokemon boolean based on user preferences
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
        <label htmlFor="quantity" data-testid="multiplier-label">
          Multiplier:
        </label>
        <StyInput
          type="number"
          name="multiplier"
          value={formValues.tableValues.multiplier}
          onChange={(e) => {
            setFormValues({
              ...formValues,
              tableValues: {
                ...formValues.tableValues,
                multiplier: Number(e.target.value),
              },
            });
          }}
          data-testid="multiplier-input"
        ></StyInput>
      </div>

      <div>
        <label
          htmlFor="quantity"
          value={formValues.tableValues.limit}
          data-testid="display-limit-label"
        >
          Limit:
        </label>
        <StyInput
          type="number"
          name="limit"
          value={formValues.tableValues.limit}
          onChange={(e) => {
            setFormValues({
              ...formValues,
              tableValues: {
                ...formValues.tableValues,
                limit: Number(e.target.value),
              },
            });
          }}
          data-testid="display-limit-input"
          min={1}
          max={100}
        ></StyInput>
      </div>

      <div>
        <label htmlFor="checkbox" data-testid="pokedisplay-checkbox-label">
          Display Pokemon:
        </label>
        <input
          type="checkbox"
          name="checkbox"
          data-testid="pokedisplay-checkbox-input"
          value={formValues.displayPokemon.isDisplayPokemon}
          onChange={(e) => {
            setFormValues({
              ...formValues,
              displayPokemon: {
                isDisplayPokemon: e.target.checked,
              },
            });
          }}
        ></input>
      </div>

      <div>
        <input type="submit" data-testid="form-submit-button"></input>
      </div>
    </StyForm>
  );
};

export default DisplayOptionsForm;

const StyForm = styled.form`
  div {
    margin: 3px 0;
  }

  background-color: ${({ theme }) => {
    return theme.themeMode.cardBackgroundColor;
  }};
  color: ${({ theme }) => {
    return theme.themeMode.textColor;
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75% 0;
  max-width: 600px;
  margin: 0.5% auto;

  @media (max-width: 800px) {
    width: 70%;
  }
`;

const StyInput = styled.input`
  width: 75px;
`;
