import styled from "styled-components";
import linksArray from "../utils/HeaderUtils/linksArray";
import linkMaker from "../utils/HeaderUtils/linkMaker";

const Header = (props) => {
  return (
    <StyHeader>
      {/* TODO: Add dummy placeholder login/registration links, or at least make sure there's room for them */}
      <StyH1>Multiplication Table Fun</StyH1>
      <Styh2>Author: Adam Hinton</Styh2>
      <StyNav>{linkMaker(linksArray)}</StyNav>
      <StyDarkMode>Dark Mode (PH)</StyDarkMode>
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
  //TODO: probably make this padding bigger for larger screens
  padding: 0 5%;

  @media (max-width: 876px) {
    flex-direction: column;
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
`;

const StyDarkMode = styled.div``;
