import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import store from "./Redux/store";
import configureStore from "./Redux/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
