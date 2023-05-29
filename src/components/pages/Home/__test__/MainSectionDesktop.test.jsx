import {
  render,
  screen,
} from "../../../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";

import MainSectionDesktop from "../utility/Desktop/MainSectionDesktop";

/**
 *  https://testing-library.com/docs/react-testing-library/cheatsheet/
 *  https://testing-library.com/docs/queries/about/
 *  https://testing-library.com/docs/queries/about/#priority
 */

describe("MainSectionDesktop component", () => {
  test("check if correct text is rendered", () => {
    render(<MainSectionDesktop />);
    // texts seen on homepage
    const CompanyText = screen.getByText("SahrahJewellery");
    const BriefCompanyText = screen.getByText(
      "The best handcrafted Jewellery money can buy at a affordable price."
    );
    const CompanDirectionText = screen.getByText("Our Physical shop");
    expect(CompanyText).toBeInTheDocument();
    expect(BriefCompanyText).toBeInTheDocument();
    expect(CompanDirectionText).toBeInTheDocument();
  });
  test("button has correct initial color and background", async () => {
    const user = userEvent.setup();
    render(<MainSectionDesktop />);
    // grab button by name.
    const colorButton = screen.getByRole("button", {
      name: "Button link to Product Page",
    });
    // check original style is as such.
    expect(colorButton).toHaveStyle({ backgroundColor: "rgb(250, 162, 193);" });
    // click button
    await user.click(colorButton);
    // background changes
    expect(colorButton).toHaveStyle({ backgroundColor: "rgb(247, 131, 172);" });
  });
  test("check if main image has darkened background", () => {
    render(<MainSectionDesktop />);
    // check main image description is correct.
    const mainBG = screen.getByTitle("Jewellery hammered in background");
    expect(mainBG).toBeInTheDocument();
    expect(mainBG).toHaveStyle({
      background: "rgba(0, 0, 0, 0.6);",
    });
  });
  test("check if arrow image functionality works", () => {
    // TODO: look at how to test arrow image functionality
    // right now it test it exist.
    render(<MainSectionDesktop />);
    const arrowImage = screen.getByAltText("arrow");
    expect(arrowImage).toBeInTheDocument();
  });
});
