import {
  render,
  screen,
} from "../../../../../test-utils/testing-library-utils";

import StoryPage from "../StoryPage";

describe("StoryPage component", () => {
  test("check if correct text is rendered", () => {
    render(<StoryPage />);
    // grab the text
    const pageTitle = screen.getByText("Our Story");
    const pageDescription = screen.getByText(
      "I am a jewellery designer maker milliner teacher and a artist residing in the uk. I have many experience doing exhibitions in London. The materials I use are brass,copper and silver. Occasionally , I design and make mix media jewellery."
    );
    const inspirationTitle = screen.getByText("Design Inspiration");
    const inspirationDescription = screen.getByText(
      "My inspiration comes from beautiful things I find in nature and blooming flowers. Initially, I will sketch my designs and then I will take into consideration of simplifying the jewellery as necessary."
    );
    // verify
    expect(pageTitle).toBeInTheDocument();
    expect(pageDescription).toBeInTheDocument();
    expect(inspirationTitle).toBeInTheDocument();
    expect(inspirationDescription).toBeInTheDocument();
  });
  test("check if correct image is rendered", () => {
    render(<StoryPage />);
    // grab the image using alt text
    const inspirationImage = screen.getByAltText("Nature");
    // verify

    expect(inspirationImage).toBeInTheDocument();
  });
});
