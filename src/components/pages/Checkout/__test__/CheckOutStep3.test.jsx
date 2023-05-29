import {
  screen,
  render,
} from "../../../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";

import CheckOutPageDesktop from "../CheckOutPageDesktop";

describe("Testing CheckOutPage3 component", () => {
  test("Ensure CheckoutPage3 renders correctly", async () => {
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
    // grab all step 3 components
    const Step3Title = screen.getByText("Payment");
    const Step3FirstNameTitle = screen.getByText("first_name");
    const Step3FirstNameContent = screen.getByText("Al-lif");
    const Step3LastNameTitle = screen.getByText("last_name");
    const Step3LastNameContent = screen.getByText("Amey");
    const Step3EmailTitle = screen.getByText("email");
    const Step3EmailContent = screen.getByText("test@mail.com");
    const Step3PhoneTitle = screen.getByText("phone_number");
    const Step3PhoneContent = screen.getByText("+44 7458 196482");
    const Step3AddressTitle = screen.getByText("address");
    const Step3AddressContent = screen.getByText("87 Scrimshire Lane #");
    const Step3CityTitle = screen.getByText("city");
    const Step3CityContent = screen.getByText("London");
    const Step3CountryTitle = screen.getByText("country");
    const Step3CountryContent = screen.getByText("United Kingdom");
    const Step3PostCodeTitle = screen.getByText("post_code");
    const Step3PostCodeContent = screen.getByText("HR9 9BL");
    const Step3DeliveryTypeTitle = screen.getByText("delivery_type");
    const Step3DeliveryTypeContent = screen.getByText("Standard");
    const Step3DeliveryMsgTitle = screen.getByText("delivery_msg");
    /* eslint-disable */
    const StepLabel3 = screen.getByTitle("Step 3").closest("svg");
    /* eslint-enable */
    const Step3BackButton = screen.getByRole("button", {
      name: "Go back Delivery step",
    });
    const Step3ContinueButton = screen.getByRole("button", {
      name: "Complete Order",
    });
    const Step3SubmitOrderButton = screen.getByRole("button", {
      name: "Submit Order",
    });
    expect(Step3Title).toBeInTheDocument();
    expect(Step3FirstNameTitle).toBeInTheDocument();
    expect(Step3FirstNameContent).toBeInTheDocument();
    expect(Step3LastNameTitle).toBeInTheDocument();
    expect(Step3LastNameContent).toBeInTheDocument();
    expect(Step3EmailTitle).toBeInTheDocument();
    expect(Step3EmailContent).toBeInTheDocument();
    expect(Step3PhoneTitle).toBeInTheDocument();
    expect(Step3PhoneContent).toBeInTheDocument();
    expect(Step3AddressTitle).toBeInTheDocument();
    expect(Step3AddressContent).toBeInTheDocument();
    expect(Step3CityTitle).toBeInTheDocument();
    expect(Step3CityContent).toBeInTheDocument();
    expect(Step3CountryTitle).toBeInTheDocument();
    expect(Step3CountryContent).toBeInTheDocument();
    expect(Step3PostCodeTitle).toBeInTheDocument();
    expect(Step3PostCodeContent).toBeInTheDocument();
    expect(Step3DeliveryTypeTitle).toBeInTheDocument();
    expect(Step3DeliveryTypeContent).toBeInTheDocument();
    expect(Step3DeliveryMsgTitle).toBeInTheDocument();
    expect(Step3ContinueButton).toBeInTheDocument();
    expect(StepLabel3).toHaveClass("Mui-active");
    expect(Step3BackButton).toBeInTheDocument();

    expect(Step3SubmitOrderButton).toBeInTheDocument();
  }, 40000);
});
