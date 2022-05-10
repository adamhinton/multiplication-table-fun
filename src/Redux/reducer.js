//NOTE: The reason I am "combining reducers" here when I only have one reducer, is that this app will soon have at least two, probably more reducers. So I am planning ahead.
//This combines all reducers in to one for modularity. Much easier than having a giant file since I will eventually have four or five reducers.

// DARK MODE PLAN:
// -create darkModeSlice.js with toggler action
//-???create useDarkMode hook to get preference from localStorage????
// -or just check localStorage in action
//Combine this with other reducers in reducer.js
//Read dark mode pref in Header; Header can also dispatch Dark Mode toggle

import { combineReducers } from "@reduxjs/toolkit";
import tableValuesReducer from "./tableValuesSlice";
import pokemonDisplayToggleReducer from "./pokemonDisplayOptionSlice";

const rootReducer = combineReducers({
  tableValues: tableValuesReducer,
  displayPokemon: pokemonDisplayToggleReducer,
});

export default rootReducer;
