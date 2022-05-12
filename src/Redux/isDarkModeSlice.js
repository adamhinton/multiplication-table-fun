const TOGGLEDARKMODE = "TOGGLEDARKMODE";

const darkModeToggleReducer = (state, action) => {
  switch (action.type) {
    case TOGGLEDARKMODE: {
      return !action.payload;
    }
    default:
      return false;
  }
};

export default darkModeToggleReducer;
