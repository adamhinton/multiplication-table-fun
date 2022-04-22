import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

test("[5] Input values stay the same after hitting submit", () => {
  render(
    <Provider store={store}>
      <DisplayOptionsForm />
    </Provider>
  );

  const multiplierInput = screen.getByTestId("multiplier-input");
  const limitInput = screen.getByTestId("display-limit-input");
  const submitBtn = screen.getByTestId("form-submit-button");

  userEvent.type(multiplierInput, "20");
  userEvent.type(limitInput, "35");

  expect(multiplierInput).toHaveValue(20);
  expect(limitInput).toHaveValue(35);

  userEvent.click(submitBtn);

  expect(multiplierInput).toHaveValue(20);
  expect(limitInput).toHaveValue(35);
});
