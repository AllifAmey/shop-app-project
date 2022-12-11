import React, { useState } from "react";
import Button from "@mui/material/Button";

function SignupBtn() {
  // basic template to creating test components.

  const [isLoading, setIsLoading] = useState(false);

  async function signUp() {
    setIsLoading(true);

    const response = await fetch("http://localhost:8000/api/user/create/", {
      method: "POST",
      body: JSON.stringify({ name: name, email: email, password: pass }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data);

    setIsLoading(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signUp();
  };

  return (
    <>
      <Button variant="outlined" size="big" fullWidth onClick={handleSubmit}>
        Login
      </Button>
    </>
  );
}

export default SignupBtn;
