import { fireEvent } from "@testing-library/dom";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import data from "../mocks/reslistsmock.json";
import { Body } from "../Body";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(data);
    },
  });
});

it("shouls render Body component with Search component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchButton = screen.getByTestId("search");

  const inputBox = screen.getByTestId("inputBox");

  fireEvent.change(inputBox, { target: { value: "Burger" } });

  fireEvent.click(searchButton);

  const res = screen.getAllByTestId("restaurant");

  expect(res.length).toBe(4);
});
