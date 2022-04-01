import { render, screen } from "@testing-library/react";
import DisplayOptionsForm from "../Components/DisplayOptionsForm";

test("[1] Renders without errors", () => {
  render(<DisplayOptionsForm />);
});

test("[2] multiplier input and label appear in document", () => {
  render(<DisplayOptionsForm />);

  const multiplierLabel = screen.getAllByTestId("multiplier-label");
  const multiplierInput = screen.getAllByTestId("multiplier-input");

  expect(multiplierLabel).toBeInTheDocument();
  expect(multiplierInput).toBeInTheDocument();
});
