import Header from "./Components/Header";
import DisplayOptionsForm from "./Components/DisplayOptionsForm";
import MultTableContainer from "./Components/MultTableContainer";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";

//DarkMode plan:
//-Set up correct colors and stuff in lightTheme and darkTheme

// ^ see reducer.js for further planning on redux

const selectState = (state) => state;

function App() {
  const stateValues = useSelector(selectState);
  const { isDarkMode } = stateValues;

  const themeMode = isDarkMode ? darkTheme : lightTheme;

  return (
    //This has a dummy theme, fill out later

    <ThemeProvider theme={{ themeMode }}>
      <GlobalStyle />
      <Header />
      <DisplayOptionsForm />
      <MultTableContainer />
    </ThemeProvider>
  );
}

export const lightTheme = {
  mainBackgroundColor: "#3c9893",
  cardBackgroundColor: "#bef8f8",
  textColor: "green",
};

export const darkTheme = {
  mainBackgroundColor: "#2d3c42",
  cardBackgroundColor: "orange",
  textColor: "pink",
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => {
      return theme.themeMode.mainBackgroundColor;
    }};
  }
  `;
