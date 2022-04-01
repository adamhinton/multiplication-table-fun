import styled from "styled-components";

const DisplayOptionsForm = (props) => {
  return (
    <StyForm>
      <div>
        <StyLabel for="quantity">Multiplier:</StyLabel>
        <input type="number"></input>
      </div>

      <div>
        <StyLabel for="quantitys">Limit:</StyLabel>
        <input type="number" value="Max 100"></input>
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
