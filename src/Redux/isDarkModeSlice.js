const TOGGLEDARKMODE = "TOGGLEDARKMODE";

const darkModeToggleReducer = (state, action) => {
  switch (action.type) {
    case TOGGLEDARKMODE: {
      console.log("action.payload:", action.payload);
      return !action.payload;
    }
    default:
      return false;
  }
};

export default darkModeToggleReducer;
