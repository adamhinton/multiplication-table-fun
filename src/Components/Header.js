import styled from "styled-components";
import linksArray from "../utils/HeaderUtils/linksArray";
import linkMaker from "../utils/HeaderUtils/linkMaker";
import { BsMoon, BsSun } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TOGGLEDARKMODE } from "../Redux/actionNameVariables";

const selectState = (state) => state;

const Header = () => {
  const stateValues = useSelector(selectState);
  const dispatch = useDispatch();

  return (
    <StyHeader>
      {/* TODO: Add dummy placeholder login/registration links, or at least make sure there's room for them */}
      <StyH1>Multiplication Table Fun</StyH1>
      <Styh2>Author: Adam Hinton</Styh2>
      <StyNav>{linkMaker(linksArray)}</StyNav>

      <div>
        <StyDarkModeToggleButton
          className="toggle_btn"
          data-testid="toggle_btn"
          onClick={() => {
            dispatch({ payload: stateValues, type: TOGGLEDARKMODE });
          }}
        >
          {stateValues.isDarkMode ? (
            <BsSun color="#ff0" size="24" title="Switch to light mode" />
          ) : (
            <BsMoon size="24" title="Switch to dark mode" />
          )}
        </StyDarkModeToggleButton>
      </div>
    </StyHeader>
  );
};

export default Header;

const StyHeader = styled.header`
  background-color: rgb(46, 37, 37);
  color: rgb(221, 203, 203);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1rem;
  padding: 0 5%;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 876px) {
    flex-direction: column;
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const StyH1 = styled.h1`
  width: 15%;
  font-size: 1.5rem;

  @media (max-width: 876px) {
    width: 100%;
    text-align: center;
    margin: 4px auto;
  }
`;

const Styh2 = styled.h2`
  @media (max-width: 876px) {
    margin: 0 auto;
  }
`;

const StyNav = styled.nav`
  display: flex;
  flex-direction: column;
  color: rgb(221, 203, 203);
`;

const StyDarkModeToggleButton = styled.button`
  background-color: var(--button-bg);
  color: var(--button-text);
  cursor: pointer;
  border: none;
  border-radius: 20%;
`;
