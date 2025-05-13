import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";


it("Should render the header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton= screen.getByRole("button", { name: "Login" });
  console.log(loginButton)
  expect(loginButton).toBeInTheDocument();
});

it("Should change Login button to Logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton= screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton= screen.getByRole("button", { name: "Logout" });

  console.log(loginButton)

  expect(logoutButton).toBeInTheDocument();

});
