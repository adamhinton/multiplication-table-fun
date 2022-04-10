import styled from "styled-components";
import SingleTableItem from "./SingleTableItem";
//useSelector replaces a subscribe function; it knows when state updates and updates components if needed
import { useSelector } from "react-redux";
const selectTableValues = (state) => state.tableValues;

const MultTableContainer = (props) => {
  const tableValues = useSelector(selectTableValues);

  const multiplier = tableValues.multiplier;
  const maxDisplayed = new Array(tableValues.limit);

  //making an array that the mult table generator will map over
  for (let i = 0; i < maxDisplayed.length; i++) {
    maxDisplayed[i] = (i + 1) * multiplier;
  }

  return (
    <StyledTableContainer>
      {maxDisplayed.map((item, index) => {
        return (
          <SingleTableItem
            key={item}
            toBeMultiplied={multiplier}
            currentMultiplier={index + 1}
          />
        );
      })}
    </StyledTableContainer>
  );
};

export default MultTableContainer;

const StyledTableContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 10%;
`;
