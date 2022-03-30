import styled from "styled-components";
import linksArray from "../utils/HeaderUtils/linksArray";
import linkMaker from "../utils/HeaderUtils/linkMaker";

const Header = (props) => {
  return (
    <StyHeader>
      <StyH1>Multiplication Table Fun</StyH1>
      <h2>Author: Adam Hinton</h2>
      <nav>{linkMaker(linksArray)}</nav>
    </StyHeader>
  );
};

export default Header;

const StyHeader = styled.header`
  background-color: rgb(46, 37, 37);
  color: rgb(221, 203, 203);
  display: flex;
  width: 100%;
`;

const StyH1 = styled.h1`
  width: 15%;
`;
