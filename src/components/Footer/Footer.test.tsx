import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

test("renders footer", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>,
  );

  expect(
    screen.getByRole("heading", { level: 3, name: "Ronney Rocha" })
  ).toBeInTheDocument();
});
