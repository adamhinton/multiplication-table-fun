import { createSlice, configureStore } from "@reduxjs/toolkit";

//Pro tip: I think action.payload is the argument. Can do something like action.payload is the multiplier.
//This seems helpful: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

//Items to include in state:
//-Display Pokemon toggle
//-Display fun fact toggle
//-Multiplier
//-Limit
//-Dark Mode Preference

//Notes:
//Actions are objects that have a type key and a payload key
//actions should contain the smallest amount of information needed to describe what happened.

//Example initial state: (will add more things in as I implement more functionality)
//const initialState = {
//     multiplier: 10,
//     limit: 25,
// }
