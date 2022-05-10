import Header from "./Components/Header";
import DisplayOptionsForm from "./Components/DisplayOptionsForm";
import MultTableContainer from "./Components/MultTableContainer";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";
import { useState } from "react";

//DarkMode plan:
//-set up useDarkMode hook
//needs fxnality to change darkMode in rest of app. Either set up toggle function to change theme (smashingmagazine) or use redux. Probably just togglefunction that passes up and down through Provider.
//-Set up correct colors and stuff in lightTheme and darkTheme

// ^ see reducer.js for further planning on redux

function App() {
  //change this to useDarKMode() later
  const [theme, themeToggler] = useState("light");
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    //This has a dummy theme, fill out later
    <ThemeProvider theme={{ themeMode }}>
      <div className="App">
        <Header />
        <DisplayOptionsForm />
        <MultTableContainer />
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
