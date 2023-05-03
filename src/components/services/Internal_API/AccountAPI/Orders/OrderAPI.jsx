import domain from "../../../domain";

export async function getOrders(setIsLoading) {
  // this grabs the
  setIsLoading(true);

  const token = localStorage.getItem("Token");

  const response = await fetch(`${domain}/api/shop/orders`, {
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

export async function getSpecificOrder(setIsLoading, order_id) {
  // retrieves specific order
  setIsLoading(true);

  const token = localStorage.getItem("Token");

  const response = await fetch(`${domain}/api/shop/orders/${order_id}`, {
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

export async function postOrders(setIsLoading, orderInfo, total_price) {
  // this grabs the
  setIsLoading(true);
  /*
  {
  "user": 0,
  "first_name": orderInfo.first_name,
  "last_name": orderInfo.first_name,
  "email": orderInfo.email,
  "phone_number": orderInfo.phone_number,
  "address": orderInfo.address,
  "city": orderInfo.city,
  "county": orderInfo.county,
  "post_code": orderInfo.post_code,
  "delivery_type": orderInfo.post_code
}
  {
    "user": 2,
    "first_name": "asdf",
    "last_name": "asdfasdf",
    "email": "asdff@dol.com",
    "phone_number": "+44 7495 996322",
    "address": "awefawef awefawef",
    "city": "awef",
    "country": "awefawef",
    "post_code": "awefawef",
    "delivery_type": "awefawefawef"
  },
  */

  const token = localStorage.getItem("Token");
  const user_id = localStorage.getItem("user_id");
  const user_data = {
    user: user_id,
    first_name: orderInfo.first_name,
    last_name: orderInfo.last_name,
    email: orderInfo.email,
    phone_number: orderInfo.phone_number,
    address: orderInfo.address,
    city: orderInfo.city,
    country: orderInfo.country,
    post_code: orderInfo.post_code,
    delivery_type: orderInfo.delivery_type,
  };

  const response = await fetch(`${domain}/api/shop/deliveryinfo/`, {
    method: "POST",
    body: JSON.stringify([
      user_data,
      {
        delivery_msg: orderInfo.delivery_msg,
        total_price: total_price,
      },
    ]),
    headers: {
      "Content-type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  const data = await response.json();

  setIsLoading(false);
  return data;
}

export async function postOrdersAnonymous(
  setIsLoading,
  orderInfo,
  total_price,
  user_cart
) {
  // this grabs the
  setIsLoading(true);
  let user_data = {
    first_name: orderInfo.first_name,
    last_name: orderInfo.last_name,
    email: orderInfo.email,
    phone_number: orderInfo.phone_number,
    address: orderInfo.address,
    city: orderInfo.city,
    country: orderInfo.country,
    post_code: orderInfo.post_code,
    delivery_type: orderInfo.delivery_type,
  };

  const response = await fetch(`${domain}/api/shop/post_orders/anonymous`, {
    method: "POST",
    body: JSON.stringify([
      user_data,
      {
        delivery_msg: orderInfo.delivery_msg,
        total_price: total_price,
      },
      {
        products: user_cart,
      },
    ]),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();

  setIsLoading(false);
  return data;
}

export async function patchOrders(setIsLoading, order_id, order_data) {
  // Only admin is allowed to edit orders.
  // The backend will verify that.
  // This is primarily used to state that the order has been dispatched.
  setIsLoading(true);

  const token = localStorage.getItem("Token");

  const response = await fetch(`${domain}/api/shop/orders/${order_id}/`, {
    method: "PATCH",
    body: JSON.stringify(order_data),
    headers: {
      "Content-type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  const data = await response.json();
  setIsLoading(false);
  if (response.ok) {
    return "error";
  } else {
    return data;
  }
}
