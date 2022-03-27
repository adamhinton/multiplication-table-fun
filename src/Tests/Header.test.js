import { render, screen } from "@testing-library/react";
import Header from "../Components/Header";

test("[1] Renders without errors", () => {
  render(<Header />);
});

test("[2] h1 displays properly", () => {
  render(<Header />);

  const h1 = screen.getByText(/Hello World!/i);
  expect(h1).toBeInTheDocument();
});
