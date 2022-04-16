//I primarily used the redux documentation to build this: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

//This is the Redux Store. It is the brain of the operation, it holds the entirety of the app's state in one place.
//The values in this will grow as I build out the app. I have made it scalable so should be easy to add more reducers and other features.

//Items to include in state:
// (These features will be gradually added)
//-Display Pokemon toggle
//-Display fun fact toggle
//-Multiplier [X]
//-Limit [X]
//-Dark Mode Preference
//-isLoggedIn
//-id of logged in user and their preferences

//Notes:
//Actions are objects that have a type key and a payload key
//actions should contain the smallest amount of information needed to describe what happened.

import { createStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

//Initial state is self explanatory: The default values that I want state to have.
//This will grow as the app grows.
const initialState = {
  tableValues: {
    multiplier: 10,
    limit: 30,
  },
  displayPokemon: false,
};

const store = createStore(rootReducer, initialState);

export default store;
