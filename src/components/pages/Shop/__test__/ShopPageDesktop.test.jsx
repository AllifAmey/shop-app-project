import {
  screen,
  render,
} from "../../../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";

import ShopContentDesktop from "../ShopContentDesktop";

describe("Testing ShopContent component inside of ShopPage component", () => {
  const product = {
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
  const FAKE_TEST_DATA = [product];
  let BIG_FAKE_TEST_DATA = [];

  for (var i = 0; i < 10; i++) {
    const new_product = { ...product };
    new_product.id = i;
    BIG_FAKE_TEST_DATA.push(new_product);
  }
  test("check productCard is rendered", () => {
    render(<ShopContentDesktop products={FAKE_TEST_DATA} />);
    const productCardName = screen.getByText(`Handmade ${product.name}`);
    const productCardImage = screen.getByAltText(`${product.name}`);
    const productCardDetailsButton = screen.getByRole("button", {
      name: `Button link to ${product.name} detail page`,
    });
    const productCardAddCartButton = screen.getByRole("button", {
      name: `Add ${product.name} to cart`,
    });

    const productCardPrice = screen.getByText(`£${product.price}`);
    const productCardFreeUKDelivery = screen.getByText("FREE UK delivery");

    expect(productCardName).toBeInTheDocument();
    expect(productCardImage).toBeInTheDocument();
    expect(productCardDetailsButton).toBeInTheDocument();
    expect(productCardAddCartButton).toBeInTheDocument();
    expect(productCardPrice).toBeInTheDocument();
    expect(productCardFreeUKDelivery).toBeInTheDocument();
  });
  test("check filters are correctly rendered", () => {
    render(<ShopContentDesktop products={FAKE_TEST_DATA} />);
    const filterSectionTitle = screen.getByText(`Filter Items`);
    const filterCheckBox = screen.getByRole("checkbox", {
      name: `filter ${product.catagory} checkbox`,
    });
    const filterName = screen.getByText(`${product.catagory}`);
    expect(filterSectionTitle).toBeInTheDocument();
    expect(filterCheckBox).toBeInTheDocument();
    expect(filterName).toBeInTheDocument();
  });

  test("check filter functionality works", async () => {
    const user = userEvent.setup();
    render(<ShopContentDesktop products={FAKE_TEST_DATA} />);
    const filterCheckBox = screen.getByRole("checkbox", {
      name: `filter ${product.catagory} checkbox`,
    });
    // click checkbox to initiate filter
    await user.click(filterCheckBox);
    // check productCard is no longer visible
    const nullproductCardName = screen.queryByText(`Handmade ${product.name}`);
    const nullproductCardImage = screen.queryByAltText(`${product.name}`);
    const nullproductCardDetailsButton = screen.queryByRole("button", {
      name: `Button link to ${product.name} detail page`,
    });
    const nullproductCardAddCartButton = screen.queryByRole("button", {
      name: `Add ${product.name} to cart`,
    });

    const nullproductCardPrice = screen.queryByText(`£${product.price}`);
    const nullproductCardFreeUKDelivery =
      screen.queryByText("FREE UK delivery");

    expect(nullproductCardName).not.toBeInTheDocument();
    expect(nullproductCardImage).not.toBeInTheDocument();
    expect(nullproductCardDetailsButton).not.toBeInTheDocument();
    expect(nullproductCardAddCartButton).not.toBeInTheDocument();
    expect(nullproductCardPrice).not.toBeInTheDocument();
    expect(nullproductCardFreeUKDelivery).not.toBeInTheDocument();
  });

  test("check model/popup functionality works on ProductCard", async () => {
    const user = userEvent.setup();
    render(<ShopContentDesktop products={FAKE_TEST_DATA} />);
    // check modelButton exist
    const productModelButton = screen.getByRole("button", {
      name: "Popup for more product info",
    });
    // check model content is not visible
    const nullModelTitle = screen.queryByText("Quick Info");
    const nullModelImage = screen.queryByAltText(`Large ${product.name}`);
    const nullModelInfoPiece1 = screen.queryByText("Handcrafted item");
    const nullModelInfoPiece2 = screen.queryByText(
      "Dispatches from a small business in United Kingdom"
    );
    const nullModelInfoPiece3 = screen.queryByText("Materials: copper");
    const nullModelInfoPiece4 = screen.getAllByText("FREE UK delivery");
    const nullModelCloseButton = screen.queryByRole("button", {
      name: "Close Popup",
    });
    expect(nullModelTitle).not.toBeInTheDocument();
    expect(nullModelImage).not.toBeInTheDocument();
    expect(nullModelInfoPiece1).not.toBeInTheDocument();
    expect(nullModelInfoPiece2).not.toBeInTheDocument();
    expect(nullModelInfoPiece3).not.toBeInTheDocument();
    expect(nullModelInfoPiece4.length).toEqual(1);
    expect(nullModelCloseButton).not.toBeInTheDocument();
    // click model button
    await user.click(productModelButton);
    // verify model appears
    const ModelTitle = screen.queryByText("Quick Info");
    const ModelImage = screen.queryByAltText(`Large ${product.name}`);
    const ModelInfoPiece1 = screen.queryByText("Handcrafted item");
    const ModelInfoPiece2 = screen.queryByText(
      "Dispatches from a small business in United Kingdom"
    );
    const ModelInfoPiece3 = screen.queryByText("Materials: copper");
    const ModelInfoPiece4 = screen.getAllByText("FREE UK delivery");
    const ModelCloseButton = screen.queryByRole("button", {
      name: "Close Popup",
    });
    expect(ModelTitle).toBeInTheDocument();
    expect(ModelImage).toBeInTheDocument();
    expect(ModelInfoPiece1).toBeInTheDocument();
    expect(ModelInfoPiece2).toBeInTheDocument();
    expect(ModelInfoPiece3).toBeInTheDocument();
    expect(ModelInfoPiece4.length).toEqual(2);
    expect(ModelCloseButton).toBeInTheDocument();
  });
  test("check pagination functionality works", async () => {
    // there are 10 products in BIG_FAKE_TEST_DATA
    const user = userEvent.setup();
    render(<ShopContentDesktop products={BIG_FAKE_TEST_DATA} />);
    const filterSectionTitle = screen.getByText(`Filter Items`);
    // check there are 2 buttons for each page
    const page1Button = screen.getByRole("button", { name: "page 1" });
    const page2Button = screen.getByRole("button", { name: "Go to page 2" });
    expect(page1Button).toBeInTheDocument();
    expect(page2Button).toBeInTheDocument();
    // check 8 productCards are rendered.
    const productCardArrayPage1 = screen.getAllByText("FREE UK delivery");
    expect(productCardArrayPage1.length).toEqual(8);
    // click second page of shop
    await user.click(page2Button);
    // check 2 productCards are rendered.
    const productCardArrayPage2 = screen.getAllByText("FREE UK delivery");
    expect(productCardArrayPage2.length).toEqual(2);

    expect(filterSectionTitle).toBeInTheDocument();
  });
});
