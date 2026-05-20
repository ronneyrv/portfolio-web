import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test } from "vitest";
import App from "../App";

test("renders app", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
});
