import React, { useState } from "react";
import Button from "@mui/material/Button";

function LoginBtn() {
  // basic template to creating test components.

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login();
  };

  async function login() {
    setIsLoading(true);

    let response = await fetch("http://localhost:8000/api/user/token/", {
      method: "POST",
      body: JSON.stringify({ email: email, password: pass }),
      headers: { "Content-type": "application/json" },
    });
    let data = await response.json();
    // user data is then set in localStorage
    localStorage.setItem("Token", data.token);
    localStorage.setItem("isLogged", "LOGGED_IN");

    response = await fetch("http://localhost:8000/api/user/me/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${data.token}`,
      },
    });
    data = await response.json();
    console.log(data);

    setIsLoading(false);
  }

  return (
    <>
      <Button variant="outlined" size="big" fullWidth onClick={handleSubmit}>
        Login
      </Button>
    </>
  );
}

export default LoginBtn;
