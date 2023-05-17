import {
  fireEvent,
  render,
  screen,
} from "../../../../../test-utils/testing-library-utils";

import MainContentHomePage from "../MainContentHomePage";

/**
 *  https://testing-library.com/docs/react-testing-library/cheatsheet/
 *  https://testing-library.com/docs/queries/about/
 *  https://testing-library.com/docs/queries/about/#priority
 */

describe("MainContentHomePage component", () => {
  test("check if correct text is rendered", () => {
    render(<MainContentHomePage />);
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
  test("button has correct initial color and background", () => {
    render(<MainContentHomePage />);
    // grab button by name.
    const colorButton = screen.getByRole("button", {
      name: "Button link to Product Page",
    });
    // check original style is as such.
    expect(colorButton).toHaveStyle({ backgroundColor: "rgb(250, 162, 193);" });
    // click button
    fireEvent.click(colorButton);
    // background changes
    expect(colorButton).toHaveStyle({ backgroundColor: "rgb(247, 131, 172);" });
  });
  test("check if main image has darkened background", () => {
    render(<MainContentHomePage />);
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
    render(<MainContentHomePage />);
    const arrowImage = screen.getByAltText("arrow");
    expect(arrowImage).toBeInTheDocument();
  });
});
