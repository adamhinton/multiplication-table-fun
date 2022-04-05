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

const tableValuesReducer = (state, action) => {
  switch (action.type) {
    case "NEWMULTIPLIERANDLIMIT": {
      //things might need to change here based on the keys in rootReducer object, not totally sure yet
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
