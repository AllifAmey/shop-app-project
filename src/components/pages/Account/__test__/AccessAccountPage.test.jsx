import { screen } from "../../../../../test-utils/testing-library-utils";
import { render } from "@testing-library/react";
import { Route, Routes, MemoryRouter, Outlet } from "react-router-dom";

import userEvent from "@testing-library/user-event";

import AccessAccountPage from "../AccessAccountPage";

describe("Testing AccessAccountPage component (login, signup, recover)", () => {
  test("Ensure login page renders correctly and functionality works", async () => {
    const loginRoute = "/account/login/";
    const user = userEvent.setup();
    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[loginRoute]}>
        <Routes>
          <Route path="/" element={<Outlet context={{ isDesktop: true }} />}>
            <Route
              path="/account/:accessType"
              element={<AccessAccountPage />}
            ></Route>
          </Route>
        </Routes>
      </MemoryRouter>
    );
    // get all the elements on the page
    const AccessAccountPageTitle = screen.getByText("SahrahJewellery");
    const loginPageText = screen.queryAllByText("Login");
    const emailFormTitle = screen.getByText("Email Address");
    const emailForm = screen.getByRole("textbox", { name: "Email" });
    const passwordFormTitle = screen.queryAllByText("Passwo");
    const passwordForm = screen.getByLabelText("Password");
    const loginPageButton = screen.getByRole("button", { name: "Login" });
    const signUpLink = screen.getByRole("link", {
      name: "Link to sign up to shop",
    });
    const recoverLink = screen.getByRole("link", {
      name: "Link to recover account by email",
    });
    // verify the elements are rendered
    expect(AccessAccountPageTitle).toBeInTheDocument();
    expect(loginPageText.length).toEqual(2);
    expect(emailFormTitle).toBeInTheDocument();
    expect(emailForm).toBeInTheDocument();
    expect(passwordFormTitle.length).toEqual(2);
    expect(passwordForm).toBeInTheDocument();
    expect(loginPageButton).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
    expect(recoverLink).toBeInTheDocument();
    // click the sign up button
    await user.click(signUpLink);
    // ensure the title changes
    const signupTitle = screen.queryAllByText("Sign Up");
    expect(signupTitle.length).toEqual(2);
    const loginLink = screen.getByRole("link", {
      name: "Link to Log in to shop",
    });
    expect(loginLink).toBeInTheDocument();
    // click login button
    await user.click(loginLink);
    // ensure the title changes to login page
    const loginPageText2 = screen.queryAllByText("Login");
    expect(loginPageText2.length).toEqual(2);
    // click recover page
    const recoverLink2 = screen.getByRole("link", {
      name: "Link to recover account by email",
    });
    await user.click(recoverLink2);
    // ensure the title changes to recover page
    const recoverTitle = screen.queryAllByText("Recover");
    expect(recoverTitle.length).toEqual(2);
  });
  test("Ensure sign up page renders correctly and functionality works", async () => {
    const signUpRoute = "/account/sign_up/";
    const user = userEvent.setup();
    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[signUpRoute]}>
        <Routes>
          <Route path="/" element={<Outlet context={{ isDesktop: true }} />}>
            <Route
              path="/account/:accessType"
              element={<AccessAccountPage />}
            ></Route>
          </Route>
        </Routes>
      </MemoryRouter>
    );
    // grab all the elements on the page
    const AccessAccountPageTitle = screen.getByText("SahrahJewellery");
    const signUpPageText = screen.queryAllByText("Sign Up");
    const nameFormTitle = screen.queryAllByText("Name");
    const nameForm = screen.getByRole("textbox", { name: "Name" });
    const emailFormTitle = screen.getByText("Email Address");
    const emailForm = screen.getByRole("textbox", { name: "Email" });
    const passwordFormTitle = screen.queryAllByText("Password");
    const passwordForm = screen.getByLabelText("Password");
    const loginLink = screen.getByRole("link", {
      name: "Link to Log in to shop",
    });
    // verify the elements are rendered
    expect(AccessAccountPageTitle).toBeInTheDocument();
    expect(signUpPageText.length).toEqual(2);
    expect(nameFormTitle.length).toEqual(2);
    expect(nameForm).toBeInTheDocument();
    expect(emailFormTitle).toBeInTheDocument();
    expect(emailForm).toBeInTheDocument();
    expect(passwordFormTitle.length).toEqual(2);
    expect(passwordForm).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    // click the login link
    await user.click(loginLink);
    // verify that user is lead to login page
    const loginPageText = screen.queryAllByText("Login");
    expect(loginPageText.length).toEqual(2);
  });
  test("Ensure recover page renders correctly and functionality works", async () => {
    const signUpRoute = "/account/recover/";
    const user = userEvent.setup();
    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[signUpRoute]}>
        <Routes>
          <Route path="/" element={<Outlet context={{ isDesktop: true }} />}>
            <Route
              path="/account/:accessType"
              element={<AccessAccountPage />}
            ></Route>
          </Route>
        </Routes>
      </MemoryRouter>
    );
    // grab all the elements on the page
    const AccessAccountPageTitle = screen.getByText("SahrahJewellery");
    const recoverPageText = screen.queryAllByText("Recover");
    const emailFormTitle = screen.getByText("Email Address");
    const emailForm = screen.getByRole("textbox", { name: "Email" });
    const loginLink = screen.getByRole("link", {
      name: "Link to Log in to shop",
    });
    // verify the elements are rendered
    expect(AccessAccountPageTitle).toBeInTheDocument();
    expect(recoverPageText.length).toEqual(2);
    expect(emailFormTitle).toBeInTheDocument();
    expect(emailForm).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    // click the login link
    await user.click(loginLink);
    // verify that user is lead to login page
    const loginPageText = screen.queryAllByText("Login");
    expect(loginPageText.length).toEqual(2);
  });
});
