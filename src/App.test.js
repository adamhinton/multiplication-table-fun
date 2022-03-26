import { render, screen } from "@testing-library/react";
import App from "./App";

test("[1] Sanity checks", () => {
  const twoPlusTwo = 2 + 2;
  expect(twoPlusTwo).toBe(4);
  expect(twoPlusTwo).not.toBe(5);
});

test("[2] Renders without errors", () => {
  render(<App />);
});

test("[3] Renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
