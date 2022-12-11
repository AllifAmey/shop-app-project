import React, { useState } from "react";
import Button from "@mui/material/Button";

function DeleteCartBtn() {
  // basic template to creating test components.

  const [isLoading, setIsLoading] = useState(false);

  async function deleteCart() {
    // essentially to "delete" you have to change the product key value. That is how you delete.

    setIsLoading(true);
    const token = localStorage.getItem("Token");

    const response = await fetch(
      `http://localhost:8000/api/shop/cart/${cartId}/`,
      {
        method: "PATCH",
        body: JSON.stringify({ user: 4, products: [2] }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);

    setIsLoading(false);
  }

  return (
    <>
      <Button variant="outlined" size="big" fullWidth onClick={deleteCart}>
        Login
      </Button>
    </>
  );
}

export default DeleteCartBtn;
