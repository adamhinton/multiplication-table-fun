// import { createSlice, configureStore } from "@reduxjs/toolkit";

//Pro tip: I think action.payload is the argument. Can do something like action.payload is the multiplier.
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

//Splitting reducers:
//Split in to different reducers in different files, organized by which part of the app they update. See the link above for more.

//Example initial state: (will add more things in as I implement more functionality)
//const initialState = {
//     multiplier: 10,
//     limit: 25,
// }

// list of actions just for my reference
// const actionsForReferenceOnly = [
//   {
//     type: "NEWMULTIPLIERANDLIMIT",
//     //payload is an array, first number is new multiplier, second is new limit
//     payload: {
//       multiplier: 22,
//       limit: 35,
//     },
//   },
// ];

const initialState = {
  multiplier: 10,
  limit: 25,
};

const tableValuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEWMULTIPLIERANDLIMIT": {
      return {
        ...state,
        multiplier: action.payload.multiplier,
        limit: action.payload.limit,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default tableValuesReducer;
