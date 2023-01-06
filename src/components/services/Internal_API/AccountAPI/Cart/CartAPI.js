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

//add the ability to post and delete cart items later using this type of export.
export async function postCart(setIsLoading, product_id) {
  // this grabs the
  setIsLoading(true);

  const token = localStorage.getItem("Token");
  const user_id = localStorage.getItem("user_id");
  console.log(`the product id is ${product_id}`);

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
  quantity,
  subtract = false
) {
  // this grabs the
  setIsLoading(true);

  const token = localStorage.getItem("Token");
  const user_id = localStorage.getItem("user_id");
  let new_quantity = quantity;

  if (subtract == true) {
    new_quantity -= 1;
  } else if (subtract == false) {
    new_quantity += 1;
  }
  console.log(cart_id);
  const response = await fetch(`${domain}/api/shop/cart/items/${cart_id}/`, {
    method: "PATCH",
    body: JSON.stringify({
      user: user_id,
      products: product_id,
      quantity: new_quantity,
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
  // this grabs the
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
