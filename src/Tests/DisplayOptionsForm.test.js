import { render, screen } from "@testing-library/react";
import DisplayOptionsForm from "../Components/DisplayOptionsForm";

test("[1] Renders without errors", () => {
  render(<DisplayOptionsForm />);
});

test("[2] multiplier input and label appear in document", () => {
  render(<DisplayOptionsForm />);

  const multiplierLabel = screen.getByTestId("multiplier-label");
  const multiplierInput = screen.getByTestId("multiplier-input");

  expect(multiplierLabel).toBeInTheDocument();
  expect(multiplierInput).toBeInTheDocument();
});

test("[2] Display limit input and label appear in document", () => {
  render(<DisplayOptionsForm />);

  const multiplierLabel = screen.getByTestId("display-limit-label");
  const multiplierInput = screen.getByTestId("display-limit-input");

  expect(multiplierLabel).toBeInTheDocument();
  expect(multiplierInput).toBeInTheDocument();
});
