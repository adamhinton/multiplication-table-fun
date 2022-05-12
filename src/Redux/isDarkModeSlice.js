const TOGGLEDARKMODE = "TOGGLEDARKMODE";

const darkModeToggleReducer = (state, action) => {
  switch (action.type) {
    case TOGGLEDARKMODE: {
      //toggles isDarkMode boolean
      return !action.payload;
    }
    default:
      return false;
  }
};

export default darkModeToggleReducer;
