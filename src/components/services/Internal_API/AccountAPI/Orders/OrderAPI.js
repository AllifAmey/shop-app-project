export async function getOrders(setIsLoading) {
  // this grabs the
  setIsLoading(true);

  const token = localStorage.getItem("Token");

  const response = await fetch("http://localhost:8000/api/shop/orders", {
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

export async function postOrders(setIsLoading, orderInfo) {
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
  
  */

  const token = localStorage.getItem("Token");

  const response = await fetch("http://localhost:8000/api/shop/orders", {
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
