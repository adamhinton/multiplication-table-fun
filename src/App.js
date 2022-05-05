import Header from "./Components/Header";
import DisplayOptionsForm from "./Components/DisplayOptionsForm";
import MultTableContainer from "./Components/MultTableContainer";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";

// console.log("theme:", theme);

function App() {
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

export default App;
