// If the user chooses, this component displays an image of the pokemon with pokedex id corresponding to displayed total
// Pokedex id's only go up to 898, so if the total is higher than that, a random pokedex id will be generated >= 898.

import styled from "styled-components";

const SingleTableItem = (props) => {
  const { toBeMultiplied, currentMultiplier, isDisplayPokemon } = props;

  const total = toBeMultiplied * currentMultiplier;

  // pokedex ids max out at 898,
  // So this generates a random id for numbers over 898
  let pokeId = total;
  if (total > 898) {
    pokeId = Math.floor(Math.random() * 898);
  }

  return (
    <StySingleTableItem
      data-testid="single-table-item"
      isDisplayPokemon={isDisplayPokemon}
    >
      {toBeMultiplied} x {currentMultiplier} = {total}
      {/* contains pokemon img if user has toggled that option */}
      {isDisplayPokemon && (
        <StyPokemonFigure>
          <img
            data-testid="poke-img"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokeId + 1
            }.png`}
            alt="pokemon"
          />
        </StyPokemonFigure>
      )}
    </StySingleTableItem>
  );
};

export default SingleTableItem;

const StySingleTableItem = styled.li`
  border: 1px solid black;
  background-color: #bef8f8;
  color: black;
  padding: 2% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: ${(props) => {
    return props.isDisplayPokemon ? "150px" : "auto";
  }};
`;

const StyPokemonFigure = styled.figure`
  width: 80%;
`;
