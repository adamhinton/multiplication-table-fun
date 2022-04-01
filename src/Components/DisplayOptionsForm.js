import styled from "styled-components";

const DisplayOptionsForm = (props) => {
  return (
    <StyForm>
      <div>
        <StyLabel htmlFor="quantity" data-testid="multiplier-label">
          Multiplier:
        </StyLabel>
        <input type="number" data-testid="multiplier-input"></input>
      </div>

      <div>
        <StyLabel htmlFor="quantity" data-testid="form-input">
          Limit:
        </StyLabel>
        <input type="number"></input>
      </div>

      <div>
        <input type="submit" data-testid="form-submit"></input>
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
