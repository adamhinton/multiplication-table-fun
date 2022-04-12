import styled from "styled-components";

const SingleTableItem = (props) => {
  const { toBeMultiplied, currentMultiplier } = props;
  let total = toBeMultiplied * currentMultiplier;
  // console.log(makeThreeDigits(total));

  return (
    <StySingleTableItem>
      {toBeMultiplied} x {currentMultiplier} = {total}
      {/* contains pokemon img if user has toggled that option */}
      <figure>
        <img
          className="poke-img"
          data-testid="shiny"
          src={`https://www.serebii.net/swordshield/pokemon/${total}.png`}
          alt="pokemon"
        />
      </figure>
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

const makeThreeDigits = (num) => {
  return Number(String(num).padStart(3, "0"));
};
