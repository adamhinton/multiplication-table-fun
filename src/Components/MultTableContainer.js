import styled from "styled-components";
import SingleTableItem from "./SingleTableItem";

const MultTableContainer = (props) => {
  return (
    <StyledTableContainer>
      <SingleTableItem />
    </StyledTableContainer>
  );
};

export default MultTableContainer;

const StyledTableContainer = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;
