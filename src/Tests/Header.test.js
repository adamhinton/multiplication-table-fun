import { render, screen } from "@testing-library/react";
import Header from "../Components/Header";

test("[1] Renders without errors", () => {
  render(<Header />);
});

test("[2] h1 and h2 displays properly", () => {
  render(<Header />);

  const h1 = screen.getByText(/multiplication table fun/i);
  const h2 = screen.getByText(/author: adam hinton/i);

  expect(h1).toBeInTheDocument();
  expect(h2).toBeInTheDocument();
});
