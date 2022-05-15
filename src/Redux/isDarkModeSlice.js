const TOGGLEDARKMODE = "TOGGLEDARKMODE";

const darkModeToggleReducer = (state, action) => {
  // console.log("state:", state);
  console.log("action.payload:", action.payload);
  switch (action.type) {
    case TOGGLEDARKMODE: {
      setDarkModeLocalStorage(!action.payload.isDarkMode);
      return !action.payload.isDarkMode;
    }
    default:
      return isDarkModeStored();
  }
};

export default darkModeToggleReducer;

const isDarkModeStored = () => {
  const key = "isDarkMode";

  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : false;
  } catch (error) {
    console.log("error getting dark mode preference from localStorage");
    return false;
  }
};

const setDarkModeLocalStorage = (isDark) => {
  const key = "isDarkMode";

  try {
    window.localStorage.setItem(key, isDark);
  } catch (e) {
    console.error("Error in setting preference");
  }
};
