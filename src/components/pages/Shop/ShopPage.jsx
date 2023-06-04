import { Suspense } from "react";
import { json, defer, Await, useLoaderData } from "react-router-dom";

import domain from "../../services/domain";
import ShopContentDesktop from "./ShopContentDesktop";
import ShopContentTablet from "./ShopContentTablet";
import ShopContentMobile from "./ShopContentMobile";
import CircularProgress from "@mui/material/CircularProgress";
import { useOutletContext } from "react-router-dom";

function ShopPage() {
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
