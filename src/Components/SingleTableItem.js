import styled from "styled-components";

const SingleTableItem = (props) => {
  const { toBeMultiplied, currentMultiplier } = props;

  return (
    <StySingleTableItem>
      {toBeMultiplied} x {currentMultiplier} ={" "}
      {toBeMultiplied * currentMultiplier}
    </StySingleTableItem>
  );
};

export default SingleTableItem;

const StySingleTableItem = styled.article`
  border: 1px solid black;
  background-color: #bef8f8;
  /* margin: 0.25%; */
  color: black;
  padding: 2% auto;
  display: flex;
  justify-content: center;
  width: 200px;
`;
