const TOGGLEDARKMODE = "TOGGLEDARKMODE";

const darkModeToggleReducer = (state, action) => {
  switch (action.type) {
    case TOGGLEDARKMODE: {
      //toggles isDarkMode boolean
      setDarkModeLocalStorage(!state);
      return !action.payload;
    }
    default:
      console.log("isDarkModeStored():", isDarkModeStored());
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
