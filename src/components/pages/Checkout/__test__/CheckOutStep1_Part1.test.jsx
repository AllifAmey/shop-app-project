import {
  screen,
  render,
} from "../../../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";

import CheckOutPage from "../CheckOutPage";
describe("Testing CheckOutStep1_part1 component", () => {
  test("TestCheckOutStep1_Part1 renders correctly.", () => {
    render(<CheckOutPage />);
    // grab content
    const Step1_Part1Title = screen.getByText("Contact Info");
    const Step1_Part1FirstNameText = screen.queryAllByText("First Name");
    const Step1_Part1FirstNameForm = screen.getByRole("textbox", {
      name: "First Name",
    });
    const Step1_Part1LastNameText = screen.queryAllByText("Last Name");
    const Step1_Part1LastNameForm = screen.getByRole("textbox", {
      name: "Last Name",
    });
    const Step1_Part1EmailText = screen.getByText("Email Address");
    const Step1_Part1EmailForm = screen.getByRole("textbox", {
      name: "Email",
    });
    const Step1_Part1PhoneText = screen.getByText("Phone");
    const Step1_Part1PhoneForm = screen.getByRole("textbox", { name: "Phone" });
    const Step1_Part1ContinueButton = screen.getByRole("button", {
      name: "Go to physical address step",
    });
    /* eslint-disable */
    const StepLabel1 = screen.getByTitle("Step 1").closest("svg");
    const StepLabel2 = screen.getByTitle("Step 2").closest("svg");
    const StepLabel3 = screen.getByTitle("Step 3").closest("svg");
    /* eslint-enable */
    // verify content is rendered
    expect(Step1_Part1Title).toBeInTheDocument();
    expect(Step1_Part1FirstNameText.length).toEqual(2);
    expect(Step1_Part1FirstNameForm).toBeInTheDocument();
    expect(Step1_Part1LastNameText.length).toEqual(2);
    expect(Step1_Part1LastNameForm).toBeInTheDocument();
    expect(Step1_Part1EmailText).toBeInTheDocument();
    expect(Step1_Part1EmailForm).toBeInTheDocument();
    expect(Step1_Part1PhoneText).toBeInTheDocument();
    expect(Step1_Part1PhoneForm).toBeInTheDocument();
    expect(Step1_Part1ContinueButton).toBeInTheDocument();
    // ensure each step has the correct style
    expect(StepLabel1).toHaveClass("Mui-active");
    expect(StepLabel2).not.toHaveClass("Mui-active");
    expect(StepLabel3).not.toHaveClass("Mui-active");
  });
});

describe("Testing CheckOutStep1_Part1 error handling", () => {
  test("The CheckOutStep1_Part1 error handles first name form correctly.", async () => {
    const user = userEvent.setup();
    render(<CheckOutPage />);
    // grab continue button
    const Step1_Part1ContinueButton = screen.getByRole("button", {
      name: "Go to physical address step",
    });
    // click the continue button
    await user.click(Step1_Part1ContinueButton);
    // grab first name form
    const Step1_Part1FirstNameFormInvalid = screen.getByRole("textbox", {
      name: "First Name",
    });
    // verify the input form is invalid when empty.
    expect(Step1_Part1FirstNameFormInvalid).not.toBeValid();
    const Step1_Part1FirstNameFormValid = screen.getByRole("textbox", {
      name: "First Name",
    });
    // type into the form
    await user.type(Step1_Part1FirstNameFormValid, "Al-lif");
    // verify the input form is valid
    expect(Step1_Part1FirstNameFormInvalid).toBeValid();
  });
  test("The CheckOutStep1_Part1 error handles last name form correctly.", async () => {
    const user = userEvent.setup();
    render(<CheckOutPage />);
    // grab continue button
    const Step1_Part1ContinueButton = screen.getByRole("button", {
      name: "Go to physical address step",
    });
    // click the continue button
    await user.click(Step1_Part1ContinueButton);
    // grab last name form
    const Step1_Part1LastNameFormInvalid = screen.getByRole("textbox", {
      name: "Last Name",
    });
    // verify the input form is invalid when empty.
    expect(Step1_Part1LastNameFormInvalid).not.toBeValid();
    const Step1_Part1LastNameFormValid = screen.getByRole("textbox", {
      name: "Last Name",
    });
    // type into the form
    await user.type(Step1_Part1LastNameFormValid, "Amey");
    // verify the input form is valid.
    expect(Step1_Part1LastNameFormInvalid).toBeValid();
  });
  test("The CheckOutStep1_Part1 error handles email form correctly.", async () => {
    const user = userEvent.setup();
    render(<CheckOutPage />);
    // grab continue button
    const Step1_Part1ContinueButton = screen.getByRole("button", {
      name: "Go to physical address step",
    });
    // click the continue button
    await user.click(Step1_Part1ContinueButton);
    // grab email form
    const Step1_Part1EmailFormInvalidEmpty = screen.getByRole("textbox", {
      name: "Email",
    });
    // verify the input form is invalid when empty
    expect(Step1_Part1EmailFormInvalidEmpty).not.toBeValid();
    // get the form again
    const Step1_Part1EmailFormInvalidEmail = screen.getByRole("textbox", {
      name: "Email",
    });
    // fill out the first name and last name form to trigger email form checking
    // note: order of error handling doesn't matter as long as data is valid.
    // type invalid email address.
    const Step1_Part1FirstNameForm = screen.getByRole("textbox", {
      name: "First Name",
    });
    const Step1_Part1LastNameForm = screen.getByRole("textbox", {
      name: "Last Name",
    });
    await user.type(Step1_Part1FirstNameForm, "Al-lif");
    await user.type(Step1_Part1LastNameForm, "Amey");
    await user.type(Step1_Part1EmailFormInvalidEmail, "testemail.com");
    // Click the button
    await user.click(Step1_Part1ContinueButton);
    // verify the input form is invalid.
    expect(Step1_Part1EmailFormInvalidEmail).not.toBeValid();
    const Step1_Part1EmailFormValid = screen.getByRole("textbox", {
      name: "Email",
    });
    await user.clear(Step1_Part1EmailFormValid);
    await user.type(Step1_Part1EmailFormValid, "test@email.com");
    expect(Step1_Part1EmailFormInvalidEmail).toBeValid();
  });
  test("The CheckOutStep1_Part1 handles phone form correctly.", async () => {
    const user = userEvent.setup();
    render(<CheckOutPage />);
    // grab continue button
    const Step1_Part1ContinueButton = screen.getByRole("button", {
      name: "Go to physical address step",
    });
    // click the continue button
    await user.click(Step1_Part1ContinueButton);
    // grab email form
    const Step1_Part1PhoneFormInvalid = screen.getByRole("textbox", {
      name: "Phone",
    });
    // verify the input form is invalid.
    expect(Step1_Part1PhoneFormInvalid).not.toBeValid();
    const Step1_Part1PhoneFormValid = screen.getByRole("textbox", {
      name: "Phone",
    });
    // type into the form invalid email
    await user.type(Step1_Part1PhoneFormValid, "7458196482");
    // verify the input form is invalid.
    expect(Step1_Part1PhoneFormValid).toBeValid();
  });
  test("The CheckOutStep1_Part1 goes to the next step if data is correct.", async () => {
    const user = userEvent.setup();
    render(<CheckOutPage />);
    // grab necessary elements
    const Step1_Part1ContinueButton = screen.getByRole("button", {
      name: "Go to physical address step",
    });
    const Step1_Part1FirstNameForm = screen.getByRole("textbox", {
      name: "First Name",
    });
    const Step1_Part1LastNameForm = screen.getByRole("textbox", {
      name: "Last Name",
    });
    const Step1_Part1EmailNameForm = screen.getByRole("textbox", {
      name: "Email",
    });
    const Step1_Part1PhoneForm = screen.getByRole("textbox", { name: "Phone" });
    // fill out the forms
    await user.type(Step1_Part1FirstNameForm, "Al-lif");
    await user.type(Step1_Part1LastNameForm, "Amey");
    await user.type(Step1_Part1EmailNameForm, "test@mail.com");
    await user.type(Step1_Part1PhoneForm, "7458196482");
    // click the continue button
    await user.click(Step1_Part1ContinueButton);
    // grab the title of the next section
    const Step1_Part2Title = screen.queryAllByText("Address");
    // verify the next step title now exist on the screen.
    expect(Step1_Part2Title.length).toBeGreaterThanOrEqual(2);
  });
});
