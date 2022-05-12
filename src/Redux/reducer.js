// DARK MODE PLAN:
// -create darkModeSlice.js with toggler action
//-???create useDarkMode hook to get preference from localStorage????
// -or just check localStorage in action
//Combine this with other reducers in reducer.js
//Read dark mode pref in Header; Header can also dispatch Dark Mode toggle

import { combineReducers } from "@reduxjs/toolkit";
import tableValuesReducer from "./tableValuesSlice";
import pokemonDisplayToggleReducer from "./pokemonDisplayOptionSlice";
import darkModeToggleReducer from "./isDarkModeSlice";

const rootReducer = combineReducers({
  tableValues: tableValuesReducer,
  displayPokemon: pokemonDisplayToggleReducer,
  isDarkMode: darkModeToggleReducer,
});

export default rootReducer;
