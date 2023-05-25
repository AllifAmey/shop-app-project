import {
  screen,
  render,
} from "../../../../../test-utils/testing-library-utils";
import NavBar from "../NavBar";
import PrimaryLinks from "../utility/PrimaryLinks";
import HamburgerMenu from "../utility/HamburgerMenu";

describe("Testing NavBar component", () => {
  test("check Navbar renders company name and svgs", () => {
    render(<NavBar isDesktop={true} />);

    // consistent contents in navbar
    const companyName = screen.getByText("SahrahJewellery");
    const accountSVGTitle = screen.getByTitle("Account Icon");
    const cartSVGTitle = screen.getByTitle("Cart Icon");

    expect(companyName).toBeInTheDocument();
    expect(accountSVGTitle).toBeInTheDocument();
    expect(cartSVGTitle).toBeInTheDocument();
  });
  test("check link text are rendered correctly on desktop", () => {
    render(<PrimaryLinks />);
    // grab the texts

    const homePageLink = screen.getByText("Home");
    const shopPageLink = screen.getByText("Shop");
    const ourStoryPageLink = screen.getByText("Our Story");
    const supportMenu = screen.getByText("Support");
    expect(homePageLink).toBeInTheDocument();
    expect(shopPageLink).toBeInTheDocument();
    expect(ourStoryPageLink).toBeInTheDocument();
    expect(supportMenu).toBeInTheDocument();
  });
  test("check hamburger menu renders correctly mobile", () => {
    render(<HamburgerMenu openMobile={false} />);
    // check if hamburger menu exist
    const hamburgerMenu = screen.getByRole("button", {
      name: "hamburger menu",
    });
    expect(hamburgerMenu).toBeInTheDocument();
    // check if menu links are not rendered
    const closeButton = screen.queryByRole("button", { name: "close" });
    const homePageLink = screen.queryByText("Home");
    const shopPageLink = screen.queryByText("Shop");
    const ourStoryPageLink = screen.queryByText("Our Story");
    const FAQLink = screen.queryByText("FAQ");
    const contactUsLink = screen.queryByText("Contact us");
    expect(closeButton).not.toBeInTheDocument();
    expect(homePageLink).not.toBeInTheDocument();
    expect(shopPageLink).not.toBeInTheDocument();
    expect(ourStoryPageLink).not.toBeInTheDocument();
    expect(FAQLink).not.toBeInTheDocument();
    expect(contactUsLink).not.toBeInTheDocument();
  });

  test("check hamburger menu renders correctly when open mobile", () => {
    render(<HamburgerMenu openMobile={true} />);
    // check if menu links are not rendered
    const closeButton = screen.queryByRole("button", { name: "close" });
    const homePageLink = screen.queryByText("Home");
    const shopPageLink = screen.queryByText("Shop");
    const ourStoryPageLink = screen.queryByText("Our Story");
    const FAQLink = screen.queryByText("FAQ");
    const contactUsLink = screen.queryByText("Contact us");
    expect(closeButton).toBeInTheDocument();
    expect(homePageLink).toBeInTheDocument();
    expect(shopPageLink).toBeInTheDocument();
    expect(ourStoryPageLink).toBeInTheDocument();
    expect(FAQLink).toBeInTheDocument();
    expect(contactUsLink).toBeInTheDocument();
  });
});
