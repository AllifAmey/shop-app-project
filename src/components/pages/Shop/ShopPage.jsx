import React, { Suspense } from "react";
import { json, defer, Await, useLoaderData } from "react-router-dom";

import domain from "../../services/domain";
import ShopContent from "./ShopContent";

function ShopPage() {
  const { products } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={products}>
        {(loadedProducts) => <ShopContent products={loadedProducts} />}
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
      { message: "Count not fetch products" },
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
