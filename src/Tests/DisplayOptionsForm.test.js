import { render, screen } from "@testing-library/react";
import DisplayOptionsForm from "../Components/DisplayOptionsForm";
import configureStore from "../Redux/store";
import { Provider } from "react-redux";

const store = configureStore();

test("[1] Renders without errors", () => {
  render(
    <Provider store={store}>
      <DisplayOptionsForm />
    </Provider>
  );
});

test("[2] multiplier input and label appear in document", () => {
  render(
    <Provider store={store}>
      <DisplayOptionsForm />
    </Provider>
  );

  const multiplierLabel = screen.getByTestId("multiplier-label");
  const multiplierInput = screen.getByTestId("multiplier-input");

  expect(multiplierLabel).toBeVisible();
  expect(multiplierInput).toBeVisible();
});

test("[2] Display limit input and label appear in document", () => {
  render(
    <Provider store={store}>
      <DisplayOptionsForm />
    </Provider>
  );

  const limitLabel = screen.getByTestId("display-limit-label");
  const limitInput = screen.getByTestId("display-limit-input");

  expect(limitLabel).toBeVisible();
  expect(limitInput).toBeVisible();
});

test("[3] Submit Button appears in document", () => {
  render(
    <Provider store={store}>
      <DisplayOptionsForm />
    </Provider>
  );

  const submitBtn = screen.getByTestId("form-submit-button");
  expect(submitBtn).toBeVisible();
});

test("[4] Display Pokemon checkbox appears in document", () => {
  render(
    <Provider store={store}>
      <DisplayOptionsForm />
    </Provider>
  );

  const pokeDisplayLabel = screen.getByTestId("pokedisplay-checkbox-label");
  const pokeDisplayInput = screen.getByTestId("pokedisplay-checkbox-input");

  expect(pokeDisplayLabel).toBeVisible();
  expect(pokeDisplayInput).toBeVisible();
});
