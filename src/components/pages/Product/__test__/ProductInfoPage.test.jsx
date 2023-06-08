import {
  screen,
  render,
} from "../../../../../test-utils/testing-library-utils";

import ProductDetailDesktop from "../ProductDetailDesktop";

describe("Testing productInfoContent component inside of ProductInfoPage component", () => {
  const FAKE_TEST_DATA = {
    catagory: "Ring",
    description_long:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat sed lectus. Ut lectus arcu bibendum at varius. Velit scelerisque in dictum non. Sagittis eu volutpat odio",
    description_short: "Sample Text 1#Sample Text 2#Sample Text 3",
    id: 1,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/shop-app-project-366818.appspot.com/o/images%2Fproduct%2Fcard1.avif?alt=media&token=c90c8f68-e3af-406b-a728-e2b1991eab85",
    name: "ring",
    price: "3.99",
  };
  test("check product info text is correctly rendered", () => {
    render(<ProductDetailDesktop product={FAKE_TEST_DATA} />);
    const product = FAKE_TEST_DATA;
    const detailSectionTitle = screen.getByText("Details");
    const descriptionSectionTitle = screen.getByText("Description");
    const productName = screen.getByText(`Handmade ${product.name}`);
    const productImage = screen.getByAltText(`${product.name.toLowerCase()}`);
    const productInfoQuality1 = screen.getByText("Sample Text 1");
    const productInfoQuality2 = screen.getByText("Sample Text 2");
    const productInfoQuality3 = screen.getByText("Sample Text 3");
    const productDescriptionLong = screen.getByText(`Handmade ${product.name}`);
    const productPrice = screen.getByText(`£${product.price}`);

    expect(detailSectionTitle).toBeInTheDocument();
    expect(descriptionSectionTitle).toBeInTheDocument();
    expect(productName).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
    expect(productInfoQuality1).toBeInTheDocument();
    expect(productInfoQuality2).toBeInTheDocument();
    expect(productInfoQuality3).toBeInTheDocument();
    expect(productDescriptionLong).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });
});
