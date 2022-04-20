const TOGGLEPOKEMONDISPLAYOPTION = "TOGGLEPOKEMONDISPLAYOPTION";

//The user is able to choose whether to display a Pokemon for each number in the multiplication table
//This dispatches their choice to the store when the user toggles the option in the form.

const pokemonDisplayToggleReducer = (state, action) => {
  switch (action.type) {
    case TOGGLEPOKEMONDISPLAYOPTION: {
      // console.log("state:", state);
      console.log("action.payload:", action.payload);
      return {
        isDisplayPokemon: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default pokemonDisplayToggleReducer;
