import React from "react";
import "./index.css";
import App from "./App";
import configureStore from "./Redux/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!)

const initialState = {
  tableValues: {
    multiplier: 10,
    limit: 30,
  },
  displayPokemon: {
    isDisplayPokemon: false,
  },
};

const store = configureStore(initialState);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
