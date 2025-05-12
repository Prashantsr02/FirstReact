import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { CreateBrowserRouter } from "react-router-dom";
import { appStore } from "../store/store";

it("Should render the header component with login button", () => {
    render(<CreateBrowserRouter>
        <Provider store={appStore}>
            <Header />
            render(<Header />)
        </Provider>
    </CreateBrowserRouter>
    );
    const LoginButton = screen.getByRole("button", { name: "Login" });
    expect(LoginButton).toBeInTheDocument();
})