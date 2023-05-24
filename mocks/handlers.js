// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // handles GET product request
  rest.get("http://localhost:8000/api/shop/products/", (req, res, ctx) => {
    return res(
      ctx.json([
        {
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
      ])
    );
  }),
  // Handles GET Cart request
];
