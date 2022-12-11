import React, { useState } from "react";
import Button from "@mui/material/Button";

function GetCartFullBtn() {
  // basic template to creating test components.

  const [isLoading, setIsLoading] = useState(false);

  async function getCartFull() {
    setIsLoading(true);

    const token = localStorage.getItem("Token");

    const response = await fetch(
      `http://localhost:8000/api/shop/cart/${cartId}/`,
      {
        method: "GET",
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
      <Button variant="outlined" size="big" fullWidth onClick={getCartFull}>
        Login
      </Button>
    </>
  );
}

export default GetCartFullBtn;
