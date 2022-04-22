import MultTableContainer from "../Components/MultTableContainer";
import { render, screen } from "@testing-library/react";
import configureStore from "../Redux/store";
import { Provider } from "react-redux";

const store = configureStore();

test("[1] Renders without errors", () => {
  render(
    <Provider store={store}>
      <MultTableContainer />
    </Provider>
  );
});

test("[2] At least one multiplication table item appears on screen", () => {
  render(
    <Provider store={store}>
      <MultTableContainer />
    </Provider>
  );

  const singleTableItem = screen.getByTestId("single-table-item");
  expect(singleTableItem).toBeVisible();
});
