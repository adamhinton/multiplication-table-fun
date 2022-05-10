import Header from "./Components/Header";
import DisplayOptionsForm from "./Components/DisplayOptionsForm";
import MultTableContainer from "./Components/MultTableContainer";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";
import { useState } from "react";

// console.log("theme:", theme);

function App() {
  //change this to useDarKMode() later
  const [theme, themeToggler] = useState("light");
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    //This has a dummy theme, fill out later
    <ThemeProvider theme={{ theme: "light" }}>
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
