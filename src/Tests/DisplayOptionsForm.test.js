import { render, screen } from "@testing-library/react";
import DisplayOptionsForm from "../Components/DisplayOptionsForm";

test("[1] Renders without errors", () => {
  render(<DisplayOptionsForm />);
});
