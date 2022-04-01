import styled from "styled-components";

const DisplayOptionsForm = (props) => {
  return (
    <StyForm>
      <div>
        <StyLabel>Multiplier:</StyLabel>
        <input type="text"></input>
      </div>

      <div>
        <StyLabel>Limit:</StyLabel>
        <input type="text" value="Max 100"></input>
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
