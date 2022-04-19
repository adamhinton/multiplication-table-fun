const NEWMULTIPLIERANDLIMIT = "NEWMULTIPLIERANDLIMIT";

//This updates state with values that the user inputs through DisplayOptionsForm.js.
//Multiplier is the number that will be multiplied, limit is the max numbers to be displayed.
//Multiplier and limit combine to generate a multiplication table which is the point of this application.

//This will not be the only reducer. I will write more as I add more features,
//And they will be combined together in reducer.js.

const tableValuesReducer = (state, action) => {
  switch (action.type) {
    case NEWMULTIPLIERANDLIMIT: {
      console.log("action.payload:", action.payload);
      //things might need to change here based on the keys in rootReducer object, not totally sure yet
      return {
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
