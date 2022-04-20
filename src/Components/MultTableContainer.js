import styled from "styled-components";
import SingleTableItem from "./SingleTableItem";
//useSelector replaces a subscribe function; it knows when state updates and updates components if needed
import { useSelector } from "react-redux";
const selectTableValues = (state) => state.tableValues;
const selectDisplayPokemon = (state) => {
  return state.displayPokemon.isDisplayPokemon;
};
const MultTableContainer = (props) => {
  const tableValues = useSelector(selectTableValues);
  const displayPokemon = useSelector(selectDisplayPokemon);

  console.log("MTC displayPokemon:", displayPokemon);
  console.log("MTC tableValues:", tableValues);

  const multiplier = tableValues.multiplier;

  //creating an array to map over to generate multiplication table
  //it's just full of zeroes, it could contain anything, doesn't matter. I just can't map over a sparse array,
  //so I had to fill it with something.
  const tableItemsArray = Array(tableValues.limit).fill(0);

  return (
    <StyledTableContainer>
      {tableItemsArray.map((item, index) => {
        return (
          <SingleTableItem
            key={index}
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
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 10%;
  height: 80vh;
`;
