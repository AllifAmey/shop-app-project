import {
  screen,
  render,
} from "../../../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";

import CheckOutPageDesktop from "../CheckOutPageDesktop";

describe("Testing CheckOutStep1_Part2Desktop component", () => {
  test("CheckOutStep1_Part2Desktop renders correctly", async () => {
    const user = userEvent.setup();
    // getting to CheckOutStep1_Part2Desktop
    render(<CheckOutPageDesktop />);
    // fill out the information for CheckOutStep1_Part1
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
    // fill out the forms for step1_part1
    await user.type(Step1_Part1FirstNameForm, "Al-lif");
    await user.type(Step1_Part1LastNameForm, "Amey");
    await user.type(Step1_Part1EmailNameForm, "test@mail.com");
    await user.type(Step1_Part1PhoneForm, "7458196482");
    await user.click(Step1_Part1ContinueButton);
    const Step1_Part2Title = screen.queryAllByText("Address");
    const Step1_Part2AddressFormLine1 = screen.getByRole("textbox", {
      name: "Address Line 1",
    });
    const Step1_Part2AddressFormLine2 = screen.getByRole("textbox", {
      name: "Address Line 2",
    });
    const Step1_Part2CityFormTitle = screen.queryAllByText("City");
    const Step1_Part2CityForm = screen.getByRole("textbox", {
      name: "City",
    });
    const Step1_Part2PostCodeFormTitle = screen.queryAllByText("Post Code");
    const Step1_Part2PostCodeForm = screen.getByRole("textbox", {
      name: "Post Code",
    });
    const Step1_Part2CountryFormTitle = screen.getByText("Country");
    const Step1_Part2CountryForm = screen.getByRole("combobox", {
      name: "Choose a country",
    });
    const Step1_Part2BackButton = screen.getByRole("button", {
      name: "Go back to Contact Step",
    });
    const Step1_Part2ContinueButton = screen.getByRole("button", {
      name: "Go to Delivery step",
    });
    expect(Step1_Part2Title.length).toBeGreaterThanOrEqual(2);
    expect(Step1_Part2AddressFormLine1).toBeInTheDocument();
    expect(Step1_Part2AddressFormLine2).toBeInTheDocument();
    expect(Step1_Part2CityFormTitle.length).toBeGreaterThanOrEqual(2);
    expect(Step1_Part2CityForm).toBeInTheDocument();
    expect(Step1_Part2PostCodeFormTitle.length).toBeGreaterThanOrEqual(2);
    expect(Step1_Part2PostCodeForm).toBeInTheDocument();
    expect(Step1_Part2CountryFormTitle).toBeInTheDocument();
    expect(Step1_Part2CountryForm).toBeInTheDocument();
    expect(Step1_Part2BackButton).toBeInTheDocument();
    expect(Step1_Part2ContinueButton).toBeInTheDocument();
  }, 40000);
  test("CheckOutStep1_Part2Desktop functionality works", async () => {
    const user = userEvent.setup();
    render(<CheckOutPageDesktop />);
    // fill out the information for CheckOutStep1_Part1
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
    // fill out the forms for step1_part1
    await user.type(Step1_Part1FirstNameForm, "Al-lif");
    await user.type(Step1_Part1LastNameForm, "Amey");
    await user.type(Step1_Part1EmailNameForm, "test@mail.com");
    await user.type(Step1_Part1PhoneForm, "7458196482");
    await user.click(Step1_Part1ContinueButton);
    // grab the title of the next section
    const Step1_Part2Title = screen.queryAllByText("Address");
    // verify the next step title now exist on the screen.
    expect(Step1_Part2Title.length).toBeGreaterThanOrEqual(2);
    // fill out the forms for step1_part2
    const Step1_Part2AddressFormLine1 = screen.getByRole("textbox", {
      name: "Address Line 1",
    });
    const Step1_Part2CityForm = screen.getByRole("textbox", {
      name: "City",
    });
    const Step1_Part2PostCodeForm = screen.getByRole("textbox", {
      name: "Post Code",
    });
    const Step1_Part2CountryForm = screen.getByRole("combobox", {
      name: "Choose a country",
    });
    // Get Continue button
    const Step1_Part2ContinueButton = screen.getByRole("button", {
      name: "Go to Delivery step",
    });
    expect(Step1_Part2ContinueButton).toBeInTheDocument();
    await user.type(Step1_Part2AddressFormLine1, "87 Scrimshire Lane");
    await user.type(Step1_Part2CityForm, "London");
    await user.type(Step1_Part2PostCodeForm, "HR9 9BL");
    await user.type(Step1_Part2CountryForm, "United Kingdom");
    await user.keyboard("{enter}");
    // Click Continue Button
    await user.click(Step1_Part2ContinueButton);
    // Grab title of CheckOutPart2 ,step 2 and back button
    const Step2Title = screen.queryAllByText("Delivery");
    /* eslint-disable */
    const StepLabel2 = screen.getByTitle("Step 2").closest("svg");
    /* eslint-enable */
    const Step2BackButton = screen.getByRole("button", {
      name: "Go back to physical address step",
    });
    // Verify in CheckOutPart2 and step 2 works.
    expect(Step2Title.length).toBeGreaterThanOrEqual(2);
    expect(StepLabel2).toHaveClass("Mui-active");
    expect(Step2BackButton).toBeInTheDocument();
    // Click Back button
    await user.click(Step2BackButton);
    // Grab title in CheckOutPart1_Part2
    const Step1_Part2TitleFunctionTest = screen.queryAllByText("Address");
    // Verify in CheckOutPart1_Part2
    expect(Step1_Part2TitleFunctionTest.length).toBeGreaterThanOrEqual(2);
    // Grab back button
    const Step1_part2BackButtonFunctionTest = screen.getByRole("button", {
      name: "Go back to Contact Step",
    });
    // Click Back button
    await user.click(Step1_part2BackButtonFunctionTest);
    // Verify in CheckOutPart1_Part1
    const Step1_Part1Title = screen.getByText("Contact Info");
    expect(Step1_Part1Title).toBeInTheDocument();
  }, 40000);
});

describe("Test CheckOutStep1_Part2Desktop error handles correctly", () => {
  test("CheckOutStep1_Part2Desktop error handles Address Line 1 form", async () => {
    const user = userEvent.setup();
    // getting to CheckOutStep1_Part2Desktop
    render(<CheckOutPageDesktop />);
    // fill out the information for CheckOutStep1_Part1
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
    // fill out the forms for step1_part1
    await user.type(Step1_Part1FirstNameForm, "Al-lif");
    await user.type(Step1_Part1LastNameForm, "Amey");
    await user.type(Step1_Part1EmailNameForm, "test@mail.com");
    await user.type(Step1_Part1PhoneForm, "7458196482");
    await user.click(Step1_Part1ContinueButton);
    // get necessary elements
    const Step1_Part2AddressFormLine1 = screen.getByRole("textbox", {
      name: "Address Line 1",
    });
    const Step1_Part2ContinueButton = screen.getByRole("button", {
      name: "Go to Delivery step",
    });
    // click continue button
    await user.click(Step1_Part2ContinueButton);
    // check if form is invalid when empty
    expect(Step1_Part2AddressFormLine1).not.toBeValid();
    // type valid input
    await user.type(Step1_Part2AddressFormLine1, "87 Scrimshire Lane");
    // click to trigger validity check
    await user.click(Step1_Part2ContinueButton);
    // verify validity
    expect(Step1_Part2AddressFormLine1).toBeValid();
  }, 40000);
  test("CheckOutStep1_Part2Desktop error handles Address Line 2 form", async () => {
    const user = userEvent.setup();
    // getting to CheckOutStep1_Part2Desktop
    render(<CheckOutPageDesktop />);
    // fill out the information for CheckOutStep1_Part1
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
    // fill out the forms for step1_part1
    await user.type(Step1_Part1FirstNameForm, "Al-lif");
    await user.type(Step1_Part1LastNameForm, "Amey");
    await user.type(Step1_Part1EmailNameForm, "test@mail.com");
    await user.type(Step1_Part1PhoneForm, "7458196482");
    await user.click(Step1_Part1ContinueButton);
    // get necessary elements
    const Step1_Part2AddressFormLine2 = screen.getByRole("textbox", {
      name: "Address Line 2",
    });
    const Step1_Part2ContinueButton = screen.getByRole("button", {
      name: "Go to Delivery step",
    });
    // click continue button
    await user.click(Step1_Part2ContinueButton);
    // check if form is valid when empty
    expect(Step1_Part2AddressFormLine2).toBeValid();
  });
  test("CheckOutStep1_Part2Desktop error handles City form", async () => {
    const user = userEvent.setup();
    // getting to CheckOutStep1_Part2Desktop
    render(<CheckOutPageDesktop />);
    // fill out the information for CheckOutStep1_Part1
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
    // fill out the forms for step1_part1
    await user.type(Step1_Part1FirstNameForm, "Al-lif");
    await user.type(Step1_Part1LastNameForm, "Amey");
    await user.type(Step1_Part1EmailNameForm, "test@mail.com");
    await user.type(Step1_Part1PhoneForm, "7458196482");
    await user.click(Step1_Part1ContinueButton);
    // get necessary elements
    const Step1_Part2CityForm = screen.getByRole("textbox", {
      name: "City",
    });
    const Step1_Part2ContinueButton = screen.getByRole("button", {
      name: "Go to Delivery step",
    });
    // click continue button
    await user.click(Step1_Part2ContinueButton);
    // check if form is valid when empty
    expect(Step1_Part2CityForm).not.toBeValid();
    await user.type(Step1_Part2CityForm, "London");
    expect(Step1_Part2CityForm).toBeValid();
  }, 40000);
  test("CheckOutStep1_Part2Desktop error handles Post Code form", async () => {
    const user = userEvent.setup();
    // getting to CheckOutStep1_Part2Desktop
    render(<CheckOutPageDesktop />);
    // fill out the information for CheckOutStep1_Part1
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
    // fill out the forms for step1_part1
    await user.type(Step1_Part1FirstNameForm, "Al-lif");
    await user.type(Step1_Part1LastNameForm, "Amey");
    await user.type(Step1_Part1EmailNameForm, "test@mail.com");
    await user.type(Step1_Part1PhoneForm, "7458196482");
    await user.click(Step1_Part1ContinueButton);
    // get necessary elements
    const Step1_Part2PostCodeForm = screen.getByRole("textbox", {
      name: "Post Code",
    });
    const Step1_Part2ContinueButton = screen.getByRole("button", {
      name: "Go to Delivery step",
    });
    // click continue button
    await user.click(Step1_Part2ContinueButton);
    // check if form is invalid when empty
    expect(Step1_Part2PostCodeForm).not.toBeValid();
    // input data
    await user.type(Step1_Part2PostCodeForm, "HR9 9BL");
    await user.click(Step1_Part2ContinueButton);
    // verify form is valid
    expect(Step1_Part2PostCodeForm).toBeValid();
  }, 40000);
  test("CheckOutStep1_Part2Desktop error handles Country form", async () => {
    const user = userEvent.setup();
    // getting to CheckOutStep1_Part2Desktop
    render(<CheckOutPageDesktop />);
    // fill out the information for CheckOutStep1_Part1
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
    // fill out the forms for step1_part1
    await user.type(Step1_Part1FirstNameForm, "Al-lif");
    await user.type(Step1_Part1LastNameForm, "Amey");
    await user.type(Step1_Part1EmailNameForm, "test@mail.com");
    await user.type(Step1_Part1PhoneForm, "7458196482");
    await user.click(Step1_Part1ContinueButton);
    // get necessary elements
    const Step1_Part2CountryForm = screen.getByRole("combobox", {
      name: "Choose a country",
    });
    const Step1_Part2ContinueButton = screen.getByRole("button", {
      name: "Go to Delivery step",
    });
    // click continue button
    await user.click(Step1_Part2ContinueButton);
    // check if form is invalid when empty
    expect(Step1_Part2CountryForm).not.toBeValid();
    // input data
    await user.type(Step1_Part2CountryForm, "United Kingdom");
    // verify form is valid
    expect(Step1_Part2CountryForm).toBeValid();
  });
}, 40000);
