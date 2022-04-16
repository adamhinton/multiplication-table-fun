import styled from "styled-components";

const SingleTableItem = (props) => {
  const { toBeMultiplied, currentMultiplier } = props;
  let total = toBeMultiplied * currentMultiplier;
  console.log(makeThreeDigits(total));
  let pokeId = makeThreeDigits(total);

  return (
    <StySingleTableItem>
      {toBeMultiplied} x {currentMultiplier} = {total}
      {/* contains pokemon img if user has toggled that option */}
      <StyPokemonFigure>
        <img
          src={`https://www.serebii.net/swordshield/pokemon/${pokeId}.png`}
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
  justify-content: center;
  width: 200px;
`;

const StyPokemonFigure = styled.figure``;

//Pokemon ids need to be three digits for img urls,
//So this converts ids <100 to three digits.
const makeThreeDigits = (num) => {
  if (num > 99) {
    return num;
  }
  return String(num).padStart(3, "0");
};
