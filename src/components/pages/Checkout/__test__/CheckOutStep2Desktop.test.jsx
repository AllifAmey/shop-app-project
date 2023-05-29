import {
  screen,
  render,
} from "../../../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";

import CheckOutPageDesktop from "../CheckOutPageDesktop";

describe("Testing CheckOutStep2Desktop component", () => {
  test("CheckOutStep2Desktop renders correctly", async () => {
    const user = userEvent.setup();
    render(<CheckOutPageDesktop />);
    // fill out the information for CheckOutStep2
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
    const Step2Delivery = screen.queryAllByText("Delivery");
    const Step2StandaryDelivery = screen.getByText("Standard");
    const Step2StandardDeliveryCheckbox = screen.getByRole("radio", {
      name: "Standard",
    });
    const Step2StandardDeliveryPrice = screen.getByText("£2.99");
    const Step2PremiumDelivery = screen.getByText("Premium");
    const Step2PremiumDeliveryCheckbox = screen.getByRole("radio", {
      name: "Premium",
    });
    const Step2PremiumDeliveryPrice = screen.getByText("£3.99");
    const Step2DeliveryInstructions = screen.queryAllByText(
      "Delivery Instructions"
    );
    const Step2DeliveryInstructionsForm = screen.getByRole("textbox", {
      name: "Delivery Instructions",
    });

    expect(Step2Delivery.length).toBeGreaterThanOrEqual(2);
    expect(Step2StandaryDelivery).toBeInTheDocument();
    expect(Step2StandardDeliveryCheckbox).toBeInTheDocument();
    expect(Step2StandardDeliveryPrice).toBeInTheDocument();
    expect(Step2PremiumDelivery).toBeInTheDocument();
    expect(Step2PremiumDeliveryCheckbox).toBeInTheDocument();
    expect(Step2PremiumDeliveryPrice).toBeInTheDocument();
    expect(Step2DeliveryInstructions.length).toBeGreaterThanOrEqual(2);
    expect(Step2DeliveryInstructionsForm).toBeInTheDocument();
  }, 40000);
  test("CheckOutStep2Desktop functionality works", async () => {
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
    // Grab content of CheckOutStep2
    /* eslint-disable */
    const StepLabel2 = screen.getByTitle("Step 2").closest("svg");
    /* eslint-enable */
    const Step2Title = screen.queryAllByText("Delivery");

    const Step2BackButton = screen.getByRole("button", {
      name: "Go back to physical address step",
    });
    const Step2ContinueButton = screen.getByRole("button", {
      name: "Go back to payment step",
    });
    // Verify in CheckOutPart2 renders
    expect(Step2Title.length).toBeGreaterThanOrEqual(2);
    expect(StepLabel2).toHaveClass("Mui-active");
    expect(Step2BackButton).toBeInTheDocument();

    // Click Continue button
    await user.click(Step2ContinueButton);
    const Step3Title = screen.getByText("Payment");
    /* eslint-disable */
    const StepLabel3 = screen.getByTitle("Step 3").closest("svg");
    /* eslint-enable */
    const Step3BackButton = screen.getByRole("button", {
      name: "Go back Delivery step",
    });
    expect(Step3Title).toBeInTheDocument();
    expect(StepLabel3).toHaveClass("Mui-active");
    expect(Step3BackButton).toBeInTheDocument();
    // Click back button
    await user.click(Step3BackButton);
    // Click Back button
    await user.click(Step2BackButton);
    // Grab title in CheckOutPart1_Part2
    const Step1_Part2TitleFunctionTest = screen.getByText("Address");
    // Verify in CheckOutPart1_Part2
    expect(Step1_Part2TitleFunctionTest).toBeInTheDocument();
  }, 40000);
});
