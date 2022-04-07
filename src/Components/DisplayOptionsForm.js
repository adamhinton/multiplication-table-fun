import styled from "styled-components";
//useDispatch lets us update global state (through redux) with actions
import { useDispatch } from "react-redux";

// saving this here so I can see the state structure, delete later
// const initialState = {
//   tableValues: {
//     multiplier: 10,
//     limit: 30,
//   },
// };

// saving this here so I can see action type, delete later
// const NEWMULTIPLIERANDLIMIT = "NEWMULTIPLIERANDLIMIT";

const DisplayOptionsForm = (props) => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {};

  // dispatch({
  //   type: "NEWMULTIPLIERANDLIMIT",
  //   payload: { multiplier: 4, limit: 1000 },
  // });

  return (
    <StyForm>
      <div>
        <StyLabel htmlFor="quantity" data-testid="multiplier-label">
          Multiplier:
        </StyLabel>
        <input type="number" data-testid="multiplier-input"></input>
      </div>

      <div>
        <StyLabel htmlFor="quantity" data-testid="display-limit-label">
          Limit:
        </StyLabel>
        <input type="number" data-testid="display-limit-input"></input>
      </div>

      <div>
        <input type="submit" data-testid="form-submit-button"></input>
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
