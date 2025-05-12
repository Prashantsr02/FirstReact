import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Load Contact Page", () => {
  render(<Contact />);
  const Heading = screen.getByRole("heading");
  expect(Heading).toBeInTheDocument();
});
