import Header from "./Components/Header";
import DisplayOptionsForm from "./Components/DisplayOptionsForm";
import MultTableContainer from "./Components/MultTableContainer";
import { ThemeProvider } from "styled-components";
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
  textColor: "black",
  inputTextColor: "black",
  inputBackgroundColor: "white",
  inputBorder: "", //intentionally blank
};

export const darkTheme = {
  mainBackgroundColor: "#2d3c42",
  cardBackgroundColor: "#111010",
  textColor: "hsla(0,0%,100%,.721)",
  inputTextColor: "rgb(221, 203, 203)",
  inputBackgroundColor: "rgb(46, 37, 37)",
  inputBorder: "1px solid white",
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => {
      return theme.themeMode.mainBackgroundColor;
    }};
    font-family: Ubuntu, sans-serif;
  }
  `;
