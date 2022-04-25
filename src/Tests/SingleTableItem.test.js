import SingleTableItem from "../Components/SingleTableItem";
import { render, screen } from "@testing-library/react";
import configureStore from "../Redux/store";
import { Provider } from "react-redux";

const store = configureStore();

test("[1] Renders without errors", () => {
  render(
    <Provider store={store}>
      <SingleTableItem />
    </Provider>
  );
});

test("[2] Correct numbers appear in component", () => {
  render(
    <Provider store={store}>
      <SingleTableItem toBeMultiplied={10} currentMultiplier={7} />
    </Provider>
  );

  const expectedSolution = screen.getByText("10 x 7 = 70");
  expect(expectedSolution).toBeVisible();
});

test("[3] Pokemon image toggles based on user preference", async () => {
  const { rerender } = render(
    <Provider store={store}>
      <SingleTableItem
        toBeMultiplied={10}
        currentMultiplier={7}
        isDisplayPokemon={false}
      />
    </Provider>
  );

  const pokemonImg = screen.queryByTestId("poke-img");
  expect(pokemonImg).not.toBeInTheDocument();

  rerender(
    <Provider store={store}>
      <SingleTableItem
        toBeMultiplied={10}
        currentMultiplier={7}
        isDisplayPokemon={true}
      />
    </Provider>
  );

  const newPokemonImg = screen.queryByTestId("poke-img");
  expect(newPokemonImg).toBeInTheDocument();
});
