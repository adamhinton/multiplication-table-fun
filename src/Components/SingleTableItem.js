import styled from "styled-components";

const SingleTableItem = (props) => {
  const { toBeMultiplied, currentMultiplier } = props;
  let total = toBeMultiplied * currentMultiplier;

  return (
    <StySingleTableItem>
      {toBeMultiplied} x {currentMultiplier} = {total}
      {/* contains pokemon img if user has toggled that option */}
      <StyPokemonFigure>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${total}.png`}
          alt="pokemon"
        />
      </StyPokemonFigure>
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
  /* border: 3px solid blue; */
`;

const StyPokemonFigure = styled.figure`
  /* width: 50%; */
  border: 1px solid blue;
  width: 60%;
`;
