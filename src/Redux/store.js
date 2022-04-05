import { createStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducer";

const initialState = {
  multiplier: 10,
  limit: 30,
};

const store = createStore(rootReducer, initialState);

export default store;
