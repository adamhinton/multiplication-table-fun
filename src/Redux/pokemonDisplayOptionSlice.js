const TOGGLEPOKEMONDISPLAYOPTION = "TOGGLEPOKEMONDISPLAYOPTION";

const pokemonDisplayToggleReducer = (state, action) => {
  switch (action.type) {
    case TOGGLEPOKEMONDISPLAYOPTION: {
      return {
        ...state,
        displayPokemon: !state.displayPokemon,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default pokemonDisplayToggleReducer;
