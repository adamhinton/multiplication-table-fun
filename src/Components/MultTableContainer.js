import styled from "styled-components";
import SingleTableItem from "./SingleTableItem";

let toBeMultiplied = 5;
// console.log("toBeMultiplied:", toBeMultiplied);
let maxDisplayed = new Array(20);
console.log("maxDisplayed:", maxDisplayed);
for (let i = 0; i < maxDisplayed.length; i++) {
  //   console.log("blah blah blah");
  maxDisplayed[i] = (i + 1) * toBeMultiplied;
}

const MultTableContainer = (props) => {
  return (
    <StyledTableContainer>
      {maxDisplayed.map((item, index) => {
        console.log("item:", item);
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
  /* display: flex;
  justify-content: center;
  margin-top: 5%; */
`;
