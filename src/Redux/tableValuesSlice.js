const NEWMULTIPLIERANDLIMIT = "NEWMULTIPLIERANDLIMIT";

//This updates state with values that the user inputs through DisplayOptionsForm.js.
//Multiplier is the number that will be multiplied, limit is the max numbers to be displayed.
//Multiplier and limit combine to generate a multiplication table which is the point of this application.

const tableValuesReducer = (state, action) => {
  switch (action.type) {
    case NEWMULTIPLIERANDLIMIT: {
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
