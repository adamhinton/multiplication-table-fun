import { render, screen } from "@testing-library/react";
import App from "../App";
import store from "../Redux/store";
import { Provider } from "react-redux";

console.log("store:", store);

test("[1] Sanity checks", () => {
  const twoPlusTwo = 2 + 2;
  expect(twoPlusTwo).toBe(4);
  expect(twoPlusTwo).not.toBe(5);
});

//not sure whether wrapping this is best practices since it's a unit test
test("[2] Renders without errors", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
