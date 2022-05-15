const TOGGLEDARKMODE = "TOGGLEDARKMODE";

const darkModeToggleReducer = (state, action) => {
  setDarkModePref(state);

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

const setDarkModePref = (state) => {
  const key = "isDarkMode";

  try {
    window.localStorage.setItem(key, !state);
  } catch (e) {
    console.error("Error in setting preference");
  }
};
