export async function getCart(setIsLoading) {
  // this grabs the
  setIsLoading(true);

  const token = localStorage.getItem("Token");

  const response = await fetch("http://localhost:8000/api/shop/cart/items", {
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

/*
add the ability to post and delete cart items later using this type of export.
export async function getCart(setIsLoading) {
    // this grabs the
    setIsLoading(true);
  
    const token = localStorage.getItem("Token");
  
    const response = await fetch("http://localhost:8000/api/shop/cart/items", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
  
    setIsLoading(false);
    return data;
  };
*/
