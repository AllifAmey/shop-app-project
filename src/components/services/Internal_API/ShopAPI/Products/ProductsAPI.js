export async function getSpecificProduct(setIsLoading, product_id) {
  // this grabs the
  setIsLoading(true);

  const token = localStorage.getItem("Token");

  const response = await fetch(
    `http://localhost:8000/api/shop/products/${product_id}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${token}`,
      },
    }
  );
  const data = await response.json();

  setIsLoading(false);
  return data;
}

export async function getProducts(setIsLoading) {
  // this grabs the
  setIsLoading(true);

  const token = localStorage.getItem("Token");

  const response = await fetch(`http://localhost:8000/api/shop/products/`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  const data = await response.json();

  setIsLoading(false);
  return data;
}

export async function postProducts(setIsLoading, product) {
  // this grabs the

  setIsLoading(true);

  const token = localStorage.getItem("Token");

  const response = await fetch(
    `http://localhost:8000/api/shop/create/product`,
    {
      method: "POST",
      body: JSON.stringify({
        name: product.name,
        image_url: product.image_url,
        price: product.price,
        description_short: product.description_short,
        description_long: product.description_long,
        catagory: product.catagory,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${token}`,
      },
    }
  );
  const data = await response.json();

  setIsLoading(false);
  return data;
}
