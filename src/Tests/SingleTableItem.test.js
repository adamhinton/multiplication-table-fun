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

test("[3] Pokemon image appears on screen when isDisplayPokemon is true", () => {
  render(
    <Provider store={store}>
      <SingleTableItem
        toBeMultiplied={10}
        currentMultiplier={7}
        isDisplayPokemon={true}
      />
    </Provider>
  );

  const pokeImg = screen.getByTestId("poke-img");
  expect(pokeImg).toBeVisible();
});
