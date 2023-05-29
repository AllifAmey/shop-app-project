import {
  render,
  screen,
} from "../../../../../test-utils/testing-library-utils";

import ValuesSectionDesktop from "../utility/Desktop/ValuesSectionDesktop";

describe("ValuesSectionDesktop component", () => {
  test("check if correct text is rendered", () => {
    render(<ValuesSectionDesktop />);
    // grab the text
    const philosophyTitle = screen.getByText("Our Philosophy");
    const philosophyDescription = screen.getByText(
      "Less is more. Simple is good. Beauty is in the eye of the beholder."
    );
    const shopTitle = screen.getByText("Shop");
    const shopDescription = screen.getByText(
      "My shop will be focussed on jewellery and findings I make. All findings are good quality authentic material."
    );
    const supportTitle = screen.getByText("Support");
    const supportDescription = screen.getByText(
      "If there any inquiries regarding the product please visit the contact us page or read the FAQs."
    );
    // verify
    expect(philosophyTitle).toBeInTheDocument();
    expect(philosophyDescription).toBeInTheDocument();
    expect(shopTitle).toBeInTheDocument();
    expect(shopDescription).toBeInTheDocument();
    expect(supportTitle).toBeInTheDocument();
    expect(supportDescription).toBeInTheDocument();
  });
  test("check if correct icon image is rendered", () => {
    render(<ValuesSectionDesktop />);
    // grab the image using alt text
    const philosophyIcon = screen.getByAltText("Philosophy icon");
    const shopIcon = screen.getByAltText("Shop icon");
    const supportIcon = screen.getByAltText("Support Icon");
    // verify
    expect(philosophyIcon).toBeInTheDocument();
    expect(shopIcon).toBeInTheDocument();
    expect(supportIcon).toBeInTheDocument();
  });
});
