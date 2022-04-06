import styled from "styled-components";
import SingleTableItem from "./SingleTableItem";
import { useSelector } from "react-redux";
const selectTableValues = (state) => state.tableValues;

let toBeMultiplied = 5;
let maxDisplayed = new Array(20);
for (let i = 0; i < maxDisplayed.length; i++) {
  maxDisplayed[i] = (i + 1) * toBeMultiplied;
}

const MultTableContainer = (props) => {
  console.log("useSelector:", useSelector);
  //tableValues makes the console give an error: "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
  //This is strange because tableValues is definitely defined exactly how I want it to be. Hmmmmm.
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
