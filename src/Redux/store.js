import { createStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const initialState = {
  tableValues: {
    multiplier: 10,
    limit: 30,
  },
};

const store = createStore(rootReducer, initialState);

export default store;
