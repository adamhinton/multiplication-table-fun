//This seems helpful: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

//Items to include in state:
//-Display Pokemon toggle
//-Display fun fact toggle
//-Multiplier
//-Limit
//-Dark Mode Preference
//-isLoggedIn
//-id of logged in user and their preferences

//Notes:
//Actions are objects that have a type key and a payload key
//actions should contain the smallest amount of information needed to describe what happened.

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
