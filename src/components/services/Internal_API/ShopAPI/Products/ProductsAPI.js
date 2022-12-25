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
