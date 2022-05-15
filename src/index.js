import React from "react";
import "./index.css";
import App from "./App";
import configureStore from "./Redux/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const isDarkModeStored = () => {
  const key = "isDarkMode";

  try {
    const item = window.localStorage.getItem(key);
    console.log("item:", item);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    return false;
  }
};

const initialState = {
  tableValues: {
    multiplier: 10,
    limit: 30,
  },
  displayPokemon: {
    isDisplayPokemon: isDarkModeStored(),
  },
  isDarkMode: false,
};

const store = configureStore(initialState);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
