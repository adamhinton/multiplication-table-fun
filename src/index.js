import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/store";
// import store from "./app/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

console.log("Initial State:", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("State after dispatch: ", store.getState())
);

store.dispatch({
  type: "NEWMULTIPLIERANDLIMIT",
  payload: { multiplier: 22, limit: 35 },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
