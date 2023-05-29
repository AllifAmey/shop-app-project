import {
  render,
  screen,
} from "../../../../../test-utils/testing-library-utils";

import ContactPageDesktop from "../ContactPageDesktop";

describe("ContactPage component", () => {
  test("check if correct contact information is rendered", () => {
    render(<ContactPageDesktop />);
    // grab the text
    const contactInfoTitle = screen.getByText("Contact Info");
    const contactInfoEmail = screen.getByText("Ameyssssd@aol.com");
    const contactInfoPhone = screen.getByText("07 305 588 089");

    // verify
    expect(contactInfoTitle).toBeInTheDocument();
    expect(contactInfoEmail).toBeInTheDocument();
    expect(contactInfoPhone).toBeInTheDocument();
  });
  test("check if correct icons are rendered", () => {
    render(<ContactPageDesktop />);
    // grab the icons using title
    const youtubeSVGTitle = screen.getByTitle("Youtube Icon");
    const etsySVGTitle = screen.getByTitle("Etsy Icon");
    const emailSVGTitle = screen.getByTitle("Email");
    const phoneSVGTitle = screen.getByTitle("Phone");
    // verify
    expect(youtubeSVGTitle).toBeInTheDocument();
    expect(etsySVGTitle).toBeInTheDocument();
    expect(emailSVGTitle).toBeInTheDocument();
    expect(phoneSVGTitle).toBeInTheDocument();
  });
  test("check if correct input labels are rendered", () => {
    render(<ContactPageDesktop />);
    // grab the input using label
    const firstNameLabel = screen.getByLabelText("First Name");
    const lastNameLabel = screen.getByLabelText("Etsy Icon");
    const emailLabel = screen.getByLabelText("Last Name");
    const messageLabel = screen.getByLabelText("Message");
    // verify
    expect(firstNameLabel).toBeInTheDocument();
    expect(lastNameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(messageLabel).toBeInTheDocument();
  });
});
