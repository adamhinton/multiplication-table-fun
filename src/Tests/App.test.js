import { render } from "@testing-library/react";
import App from "../App";
import configureStore from "../Redux/store";
import { Provider } from "react-redux";

const store = configureStore();

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
