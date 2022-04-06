import styled from "styled-components";
import SingleTableItem from "./SingleTableItem";
import { useSelector } from "react-redux";

let toBeMultiplied = 5;
let maxDisplayed = new Array(20);
for (let i = 0; i < maxDisplayed.length; i++) {
  maxDisplayed[i] = (i + 1) * toBeMultiplied;
}

const MultTableContainer = (props) => {
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
