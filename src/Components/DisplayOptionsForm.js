import styled from "styled-components";

const DisplayOptionsForm = (props) => {
  return (
    <StyForm>
      <StyLabel>Multiplier:</StyLabel>
      <input type="text"></input>
    </StyForm>
  );
};

export default DisplayOptionsForm;

const StyForm = styled.form`
  background-color: #bef8f8;
  display: flex;
  justify-content: center;
  padding-top: 2%;
`;

const StyLabel = styled.label`
  color: black;
`;
