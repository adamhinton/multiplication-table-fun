import styled from "styled-components";
import SingleTableItem from "./SingleTableItem";
//useSelector replaces a subscribe function; it knows when state updates and updates components if needed
import { useSelector } from "react-redux";
const selectTableValues = (state) => state.tableValues;

let toBeMultiplied = 5;
let maxDisplayed = new Array(20);
for (let i = 0; i < maxDisplayed.length; i++) {
  maxDisplayed[i] = (i + 1) * toBeMultiplied;
}

const MultTableContainer = (props) => {
  const tableValues = useSelector(selectTableValues);
  console.log("tableValues:", tableValues);
  return (
    <StyledTableContainer>
      {maxDisplayed.map((item, index) => {
        return (
          <SingleTableItem
            key={item}
            toBeMultiplied={toBeMultiplied}
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
`;
