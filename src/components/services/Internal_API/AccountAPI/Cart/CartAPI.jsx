import domain from "../../../domain";

export async function getCart(setIsLoading) {
  // this grabs the
  setIsLoading(true);

  const token = localStorage.getItem("Token");
  //https://maininfo.ameyshopukbackend.com

  const response = await fetch(`${domain}/api/shop/cart/items`, {
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

export async function postCart(setIsLoading, product_id) {
  // Updates the cart .
  setIsLoading(true);

  const token = localStorage.getItem("Token");
  const user_id = localStorage.getItem("user_id");

  const response = await fetch(`${domain}/api/shop/cart/items/`, {
    method: "POST",
    body: JSON.stringify({
      user: user_id,
      product: product_id,
      quantity: 1,
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

export async function patchCartItem(
  setIsLoading,
  cart_id,
  product_id,
  quantity
) {
  // updates a user's cart item.
  setIsLoading(true);

  const token = localStorage.getItem("Token");
  const user_id = localStorage.getItem("user_id");

  const response = await fetch(`${domain}/api/shop/cart/items/${cart_id}/`, {
    method: "PATCH",
    body: JSON.stringify({
      user: user_id,
      products: product_id,
      quantity: quantity,
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

export async function deleteCartItem(setIsLoading, cart_id) {
  // deletes a specific cart item.
  setIsLoading(true);

  const token = localStorage.getItem("Token");

  const response = await fetch(`${domain}/api/shop/cart/items/${cart_id}/`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  const data = await response.json();

  setIsLoading(false);
  return data;
}
