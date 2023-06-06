import { Suspense } from "react";
import {
  json,
  defer,
  Await,
  useLoaderData,
  useOutletContext,
} from "react-router-dom";

import domain from "../../services/domain";
import ShopContentDesktop from "./ShopContentDesktop";
import ShopContentTablet from "./ShopContentTablet";
import ShopContentMobile from "./ShopContentMobile";
import CircularProgress from "@mui/material/CircularProgress";

function ShopPage() {
  /*
    docs:
      For all devices, there are two primary sections - filter and products.
      In the filter section there are checkboxes to filter each product.
      In the product section there are cards representing the product.

    The way the logic works in general:
    There are two sides of the shop - filters on the left and products on right.
    left - 
    Each product has a catagory attached to its object.
    Filters are created based on how many unique values of catagory there are.
    Filters then allow for users to see or not to see the products with this catagory.
    right - 
    When data is grabbed from the product api,
    the product's values goes through to the product component,
    it is then this component that creates the product cards seen in the shop with all,
    of its functionality.

    Pagination is 8. So every 8 products a page is created.

  */
  const { products } = useLoaderData();
  const context = useOutletContext();
  return (
    <Suspense
      fallback={
        <CircularProgress
          size="25rem"
          sx={{ margin: "auto" }}
        ></CircularProgress>
      }
    >
      <Await resolve={products}>
        {(loadedProducts) => (
          <>
            {context.isDesktop && (
              <ShopContentDesktop products={loadedProducts} />
            )}
            {context.isTablet && (
              <ShopContentTablet products={loadedProducts} />
            )}
            {context.isMobile && (
              <ShopContentMobile products={loadedProducts} />
            )}
          </>
        )}
      </Await>
    </Suspense>
  );
}

export default ShopPage;

async function loadProducts() {
  const response = await fetch(`${domain}/api/shop/products/`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!response.ok) {
    throw json(
      { message: "Could not fetch products" },
      { status: response.status }
    );
  } else {
    const data = await response.json();
    return data;
  }
}

export function loader() {
  return defer({
    products: loadProducts(),
  });
}
