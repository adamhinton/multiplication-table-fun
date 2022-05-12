import Header from "./Components/Header";
import DisplayOptionsForm from "./Components/DisplayOptionsForm";
import MultTableContainer from "./Components/MultTableContainer";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";

//DarkMode plan:
//-Set up correct colors and stuff in lightTheme and darkTheme

// ^ see reducer.js for further planning on redux

const selectState = (state) => state;

function App() {
  const stateValues = useSelector(selectState);
  const { isDarkMode } = stateValues;
  console.log("isDarkMode:", isDarkMode);

  //change this to useDarKMode() later
  const [theme, themeToggler] = useState("light");
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    //This has a dummy theme, fill out later
    <ThemeProvider theme={{ themeMode }}>
      <div className="App">
        <Header />
        <DisplayOptionsForm />
        <StyMain>
          <MultTableContainer />
        </StyMain>
      </div>
    </ThemeProvider>
  );
}

export const lightTheme = {
  backgroundColor: "blue",
  textColor: "green",
};

export const darkTheme = {
  backgroundColor: "orange",
  textColor: "pink",
};

export default App;

const StyMain = styled.main`
  background-color: ${(props) => {
    // return props.isDisplayPokemon ? "150px" : "auto";
    console.log("props:", props);
  }};
`;
