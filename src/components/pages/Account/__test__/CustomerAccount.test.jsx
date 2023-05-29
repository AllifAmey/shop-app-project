import {
  screen,
  render,
} from "../../../../../test-utils/testing-library-utils";

import ProductButtonRender from "../utility/Customer/ProductButtonRender";
import OrderDetailRender from "../utility/Customer/OrderDetailRender";
import CustomerNavBar from "../utility/Customer/CustomerNavBar";
import TotalAmountRender from "../utility/Customer/TotalAmountRender";
describe("Testing parts of the CustomerAccount component", () => {
  const FAKE_ORDER_DATA = {
    date_ordered: "2023-05-03",
    delivery_instructions: "Leave by the door",
    delivery_status: "Processing Order",
    email: "allifamey487@gmail.com",
    id: 30,
    order: [
      {
        product: {
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
        },
        quantity: 1,
      },
      {
        product: {
          catagory: "Ring",
          description_long:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat sed lectus. Ut lectus arcu bibendum at varius. Velit scelerisque in dictum non. Sagittis eu volutpat odio",
          description_short:
            "Handmade item#Dispatches from a small business in United Kingdom#Materials: copper#FREE UK delivery",
          id: 2,
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/shop-app-project-366818.appspot.com/o/images%2Fproduct%2Fcard1.avif?alt=media&token=c90c8f68-e3af-406b-a728-e2b1991eab85",
          name: "ring",
          price: "3.99",
        },
        quantity: 1,
      },
    ],
    personal_info_used: {
      address: "87 Scrimshire Lane #",
      city: "London",
      country: "United Kingdom",
      delivery_type: "Standard",
      email: "test@mail.com",
      first_name: "Al-lif",
      id: 35,
      last_name: "Amey",
      phone_number: "+44 7458 196482",
      post_code: "NW1 6TD",
      user: 2,
    },
    total_price: "9.98",
    user: 2,
  };
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

  const FAKE_CART_DATA = [
    { cart_item_id: 1, product: FAKE_TEST_DATA, quantity: 1 },
  ];
  const FAKE_CART_DATA_EMPTY = { cart_item_id: "", product: "", quantity: "" };
  test("Ensure ProductButtonRender renders properly", () => {
    render(<ProductButtonRender value={FAKE_TEST_DATA} />);

    const productDetailButton = screen.getByRole("button", {
      name: "Product Detail",
    });

    expect(productDetailButton).toBeInTheDocument();
  });

  test("Ensure CustomerNavBar renders properly", () => {
    render(<CustomerNavBar />);

    const OrderTitle = screen.getByText("Orders");
    const cartTitle = screen.getByText("Cart");

    expect(OrderTitle).toBeInTheDocument();
    expect(cartTitle).toBeInTheDocument();
  });
  test("Ensure OrderDetailRender renders properly", () => {
    render(<OrderDetailRender data={FAKE_ORDER_DATA} />);

    const orderDetailButton = screen.getByRole("button", {
      name: "Order detail",
    });

    expect(orderDetailButton).toBeInTheDocument();
  });
  test("Ensure TotalAmountRender renders cart item", () => {
    render(<TotalAmountRender data={FAKE_CART_DATA[0]} />);

    const totalAmountCartItem = screen.getByText("£3.99");

    expect(totalAmountCartItem).toBeInTheDocument();
  });
  test("Ensure TotalAmountRender renders total amount of cart items", () => {
    render(<TotalAmountRender value={15.96} data={FAKE_CART_DATA_EMPTY} />);

    const totalAmountOfCartItems = screen.getByText("Total amount : £15.96");

    expect(totalAmountOfCartItems).toBeInTheDocument();
  });
});
