import React, { useState } from "react";
import Button from "@mui/material/Button";

function getCartBtn() {
  // basic template to creating test components.

  const [isLoading, setIsLoading] = useState(false);

  async function getCart() {
    // this grabs the
    setIsLoading(true);

    const token = localStorage.getItem("Token");

    const response = await fetch("http://localhost:8000/api/shop/cart/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setcartId(data.id);

    setIsLoading(false);
  }

  return (
    <>
      <Button variant="outlined" size="big" fullWidth onClick={getCart}>
        Login
      </Button>
    </>
  );
}

export default getCartBtn;
