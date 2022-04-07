// import { render, screen } from "@testing-library/react";
import App from "../App";

test("[1] Sanity checks", () => {
  const twoPlusTwo = 2 + 2;
  expect(twoPlusTwo).toBe(4);
  expect(twoPlusTwo).not.toBe(5);
});

test.skip("[2] Renders without errors", () => {
  render(<App />);
});
