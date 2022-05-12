const TOGGLEDARKMODE = "TOGGLEDARKMODE";

const darkModeToggleReducer = (state, action) => {
  switch (action.type) {
    case TOGGLEDARKMODE: {
      return !state;
    }
    default:
      return false;
  }
};

export default darkModeToggleReducer;
