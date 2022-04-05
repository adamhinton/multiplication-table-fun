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
