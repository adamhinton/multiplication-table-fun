const TOGGLEDARKMODE = "TOGGLEDARKMODE";

const darkModeToggleReducer = (state, action) => {
  switch (action.type) {
    case TOGGLEDARKMODE: {
      const { isDarkMode } = action.payload;
      setDarkModeLocalStorage(!isDarkMode);
      return !isDarkMode;
    }

    default:
      return storedDarkModePreferenceOrFalse();
  }
};

export default darkModeToggleReducer;

const storedDarkModePreferenceOrFalse = () => {
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
