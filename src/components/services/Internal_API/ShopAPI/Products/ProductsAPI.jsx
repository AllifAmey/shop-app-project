import domain from "../../../domain";

export async function getSpecificProduct(setIsLoading, product_id) {
  // this grabs the
  setIsLoading(true);

  const response = await fetch(`${domain}/api/shop/products/${product_id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();

  setIsLoading(false);
  return data;
}

export async function getProducts(setIsLoading) {
  // this grabs the
  setIsLoading(true);

  const response = await fetch(`${domain}/api/shop/products/`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
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

  const response = await fetch(`${domain}/api/shop/create/product`, {
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
  });
  const data = await response.json();

  setIsLoading(false);
  return data;
}

export async function deleteProducts(setIsLoading, pk) {
  // this grabs the

  setIsLoading(true);

  const token = localStorage.getItem("Token");

  const response = await fetch(`${domain}/api/shop/products/delete/${pk}/`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  setIsLoading(false);
  if (!response.ok) {
    return "error";
  } else {
    const data = await response.json();
    return data;
  }
}
