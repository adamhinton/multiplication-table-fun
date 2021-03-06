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
      <TextContainerDiv isDisplayPokemon={isDisplayPokemon}>
        x {currentMultiplier} =<StyDisplayTotal> {total} </StyDisplayTotal>
      </TextContainerDiv>
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
  background-color: ${({ theme }) => {
    return theme.themeMode.cardBackgroundColor;
  }};
  color: ${({ theme }) => {
    return theme.themeMode.textColor;
  }};
  padding: 2% auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: ${(props) => {
    return props.isDisplayPokemon ? "120px" : "auto";
  }};
  margin: 0.35%;
`;

const StyPokemonFigure = styled.figure`
  width: 80%;
  margin: 0;
`;

const StyDisplayTotal = styled.strong`
  font-size: 18px;
`;

const TextContainerDiv = styled.div`
  margin-top: ${(props) => {
    return props.isDisplayPokemon ? "10px" : "0";
  }};
  font-size: 14px;
`;
