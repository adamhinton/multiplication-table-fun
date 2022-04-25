import styled from "styled-components";

const SingleTableItem = (props) => {
  const { toBeMultiplied, currentMultiplier, isDisplayPokemon } = props;
  // console.log("isDisplayPokemon:", isDisplayPokemon);
  const total = toBeMultiplied * currentMultiplier;

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
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${total}.png`}
            alt="pokemon"
          />
        </StyPokemonFigure>
      )}
    </StySingleTableItem>
  );
};

export default SingleTableItem;

const StySingleTableItem = styled.article`
  border: 1px solid black;
  background-color: #bef8f8;
  color: black;
  padding: 2% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 125px;
  /* width: 180px; */
`;

const StyPokemonFigure = styled.figure`
  width: 60%;
`;
