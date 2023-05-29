import {
  screen,
  render,
} from "../../../../../test-utils/testing-library-utils";

import Footer from "../Footer";

describe("Testing Footer component", () => {
  test("check texts are rendered correctly.", () => {
    render(<Footer isDesktop={true} />);
    const footerTextTop = screen.getByText("Follow us on");
    const footerTextBottom1 = screen.getByText("Privacy Policy");
    const footerTextBottom2 = screen.getByText("Our Story");

    expect(footerTextTop).toBeInTheDocument();
    expect(footerTextBottom1).toBeInTheDocument();
    expect(footerTextBottom2).toBeInTheDocument();
  });
  test("check svgs are rendered correctly.", () => {
    render(<Footer isDesktop={true} />);
    const youtubeSVGTitle = screen.getByTitle("Youtube Icon");
    const etsySVGTitle = screen.getByTitle("Etsy Icon");

    expect(youtubeSVGTitle).toBeInTheDocument();
    expect(etsySVGTitle).toBeInTheDocument();
  });
});
