import React, { useState } from "react";
import Button from "@mui/material/Button";

function EditCartBtn() {
  // basic template to creating test components.

  const [isLoading, setIsLoading] = useState(false);

  async function editCart() {
    // edits cart, essentially find the product id and put that in the product key.
    setIsLoading(true);
    const token = localStorage.getItem("Token");

    const response = await fetch(
      `http://localhost:8000/api/shop/cart/${cartId}/`,
      {
        method: "PATCH",
        body: JSON.stringify({ user: 4, products: [1, 2] }),
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
      <Button variant="outlined" size="big" fullWidth onClick={editCart}>
        Login
      </Button>
    </>
  );
}

export default EditCartBtn;
