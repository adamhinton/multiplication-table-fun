import { render, screen } from "@testing-library/react";
import DisplayOptionsForm from "../Components/DisplayOptionsForm";
import store from "../Redux/store";
import { Provider } from "react-redux";

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

  expect(multiplierLabel).toBeInTheDocument();
  expect(multiplierInput).toBeInTheDocument();
});

test("[2] Display limit input and label appear in document", () => {
  render(
    <Provider store={store}>
      <DisplayOptionsForm />
    </Provider>
  );

  const multiplierLabel = screen.getByTestId("display-limit-label");
  const multiplierInput = screen.getByTestId("display-limit-input");

  expect(multiplierLabel).toBeInTheDocument();
  expect(multiplierInput).toBeInTheDocument();
});

test("[3] Submit Button appears in document", () => {
  render(
    <Provider store={store}>
      <DisplayOptionsForm />
    </Provider>
  );

  const submitBtn = screen.getByTestId("form-submit-button");
  expect(submitBtn).toBeInTheDocument();
});

test("[4] 'limit' input must be greater than 0 and less than 301", () => {
  render(
    <Provider store={store}>
      <DisplayOptionsForm />
    </Provider>
  );
});
