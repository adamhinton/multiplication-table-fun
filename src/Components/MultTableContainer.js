import styled from "styled-components";
import SingleTableItem from "./SingleTableItem";
//useSelector replaces a subscribe function; it knows when state updates and updates components if needed
import { useSelector } from "react-redux";
const selectState = (state) => state;

const MultTableContainer = (props) => {
  //pulls in global state from Redux store
  const state = useSelector(selectState);
  const { multiplier, limit } = state.tableValues;
  const { isDarkMode } = state;
  // console.log("state:", state);
  console.log("isDarkMode:", isDarkMode);
  const isDisplayPokemon = state.displayPokemon.isDisplayPokemon;

  //creating an array to map over to generate multiplication table
  //it's just full of zeroes, it could contain anything, doesn't matter. I just can't map over a sparse array,
  //so I had to fill it with something.
  const tableItemsArray = Array(limit).fill(0);

  return (
    <StyledTableContainer>
      {tableItemsArray.map((item, index) => {
        return (
          <SingleTableItem
            key={index}
            toBeMultiplied={multiplier}
            currentMultiplier={index + 1}
            isDisplayPokemon={isDisplayPokemon}
          />
        );
      })}
    </StyledTableContainer>
  );
};

export default MultTableContainer;

const StyledTableContainer = styled.ol`
  max-width: 1200px;
  display: flex;
  flex-direction: column-wrap;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 20%;
  height: auto;
  padding-inline-start: 0;
  justify-content: center;

  @media (max-width: 1250px) {
    margin: 0 10%;
  }

  @media (max-width: 1000px) {
    height: 100%;
    flex-direction: row;
  }
  @media (max-width: 876px) {
    margin: 0 2%;
  }
`;
