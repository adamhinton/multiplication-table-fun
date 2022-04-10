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
  background-color: #bef8f8;
  margin: 1%;
  color: black;
  padding: 2% auto;
`;
