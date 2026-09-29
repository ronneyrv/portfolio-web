import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthProvider } from "../../auth/AuthProvider";

test("renders navbar", () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </BrowserRouter>,
  );

  expect(screen.getByText("Início")).toBeInTheDocument();
});
