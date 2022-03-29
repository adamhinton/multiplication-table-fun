import styled from "styled-components";

const Header = (props) => {
  return (
    <StyHeader>
      <StyH1>Multiplication Table Fun</StyH1>
      <h2>Author: Adam Hinton</h2>
    </StyHeader>
  );
};

export default Header;

const StyHeader = styled.header`
  background-color: rgb(46, 37, 37);
  color: rgb(221, 203, 203);
`;

const StyH1 = styled.h1`
  width: 15%;
`;
