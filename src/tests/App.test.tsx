import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test } from "vitest";
import App from "../App";
import { AuthProvider } from "../auth/AuthProvider";

test("renders app", () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>,
  );
});
