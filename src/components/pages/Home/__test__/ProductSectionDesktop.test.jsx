import {
  render,
  screen,
} from "../../../../../test-utils/testing-library-utils";

import ProductSectionDesktop from "../utility/Desktop/ProductSectionDesktop";

describe("ProductSectionDesktop component", () => {
  test("check if correct text is rendered", () => {
    render(<ProductSectionDesktop />);
    // grab the text
    const perfectionTitle = screen.getByText("Handcrafted to Perfection");
    const perfectionDescription = screen.getByText(
      "In every jewellery I create has been inspected and perfected by me with good quality tools I use to make my jewellery."
    );
    const emotionTitle = screen.getByText("Created with Emotion");
    const emotionDescription = screen.getByText(
      "Every piece brings me joy and happiness because the design takes a long time to finalise."
    );
    const careTitle = screen.getByText("Crafted with Care");
    const careDescription = screen.getByText(
      "Whenever I assemble a product I ensure the jewellery will be unique and last for a long time."
    );
    // verify
    expect(perfectionTitle).toBeInTheDocument();
    expect(perfectionDescription).toBeInTheDocument();
    expect(emotionTitle).toBeInTheDocument();
    expect(emotionDescription).toBeInTheDocument();
    expect(careTitle).toBeInTheDocument();
    expect(careDescription).toBeInTheDocument();
  });
  test("check if correct image is rendered", () => {
    render(<ProductSectionDesktop />);
    // grab the image using alt text
    const ringImage = screen.getByAltText("Ring");
    const pinCushionImage = screen.getByAltText("Pin Cushion");
    const scrunchyImage = screen.getByAltText("Scrunchy");
    // verify
    expect(ringImage).toBeInTheDocument();
    expect(pinCushionImage).toBeInTheDocument();
    expect(scrunchyImage).toBeInTheDocument();
  });
});
