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
`;

const StyH1 = styled.h1`
  width: 15%;
  font-size: 1.5rem;
`;

const Styh2 = styled.h2``;

const StyNav = styled.nav`
  display: flex;
  flex-direction: column;
  a {
  }
`;

const StyDarkMode = styled.div``;
