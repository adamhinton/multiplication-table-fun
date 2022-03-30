import { render, screen } from "@testing-library/react";
import Header from "../Components/Header";

test("[1] Renders without errors", () => {
  render(<Header />);
});

test("[2] h1, h2 and dark mode button display properly", () => {
  render(<Header />);

  const h1 = screen.getByText(/multiplication table fun/i);
  const h2 = screen.getByText(/author: adam hinton/i);
  const darkBtn = screen.getByText(/dark mode/);

  expect(h1).toBeInTheDocument();
  expect(h2).toBeInTheDocument();
  expect(darkBtn).toBeInTheDocument();
});
