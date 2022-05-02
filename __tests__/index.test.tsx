import { render, screen } from "@testing-library/react";
import Home from "pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading (h1)", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Github repository finder",
    });

    expect(heading).toBeInTheDocument();
  });
});
