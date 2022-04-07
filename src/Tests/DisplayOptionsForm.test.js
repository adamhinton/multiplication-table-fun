import { render, screen } from "@testing-library/react";
import DisplayOptionsForm from "../Components/DisplayOptionsForm";

test.skip("[1] Renders without errors", () => {
  render(<DisplayOptionsForm />);
});

test.skip("[2] multiplier input and label appear in document", () => {
  render(<DisplayOptionsForm />);

  const multiplierLabel = screen.getByTestId("multiplier-label");
  const multiplierInput = screen.getByTestId("multiplier-input");

  expect(multiplierLabel).toBeInTheDocument();
  expect(multiplierInput).toBeInTheDocument();
});

test.skip("[2] Display limit input and label appear in document", () => {
  render(<DisplayOptionsForm />);

  const multiplierLabel = screen.getByTestId("display-limit-label");
  const multiplierInput = screen.getByTestId("display-limit-input");

  expect(multiplierLabel).toBeInTheDocument();
  expect(multiplierInput).toBeInTheDocument();
});

test.skip("[2] Submit Button appears in document", () => {
  render(<DisplayOptionsForm />);

  const submitBtn = screen.getByTestId("form-submit-button");
  expect(submitBtn).toBeInTheDocument();
});
