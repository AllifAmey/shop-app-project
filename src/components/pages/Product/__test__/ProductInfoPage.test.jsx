import {
  screen,
  render,
} from "../../../../../test-utils/testing-library-utils";

import ProductInfoContent from "../ProductInfoContent";

describe("Testing ShopContent component inside of ShopPage component", () => {
  const FAKE_TEST_DATA = {
    catagory: "Ring",
    description_long:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat sed lectus. Ut lectus arcu bibendum at varius. Velit scelerisque in dictum non. Sagittis eu volutpat odio",
    description_short:
      "Handmade item#Dispatches from a small business in United Kingdom#Materials: copper#FREE UK delivery",
    id: 1,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/shop-app-project-366818.appspot.com/o/images%2Fproduct%2Fcard1.avif?alt=media&token=c90c8f68-e3af-406b-a728-e2b1991eab85",
    name: "ring",
    price: "3.99",
  };
  test("check product info text is correctly rendered", () => {
    render(<ProductInfoContent product={FAKE_TEST_DATA} />);
    //screen.debug();
    const product = FAKE_TEST_DATA;
    const productName = screen.getByText(`Handmade ${product.name}`);

    expect(productName).toBeInTheDocument();
  });
});
