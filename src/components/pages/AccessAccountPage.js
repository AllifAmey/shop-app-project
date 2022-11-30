import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { json, Link as RouterLink } from "react-router-dom";

function AccessAccountPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [token, setToken] = useState("");
  const [cartId, setcartId] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  async function login() {
    setIsLoading(true);

    let response = await fetch("http://localhost:8000/api/user/token/", {
      method: "POST",
      body: JSON.stringify({ email: email, password: pass }),
      headers: { "Content-type": "application/json" },
    });
    let data = await response.json();
    setToken(data.token);

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

  async function getCart() {
    setIsLoading(true);

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

  async function getCartFull() {
    setIsLoading(true);

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

  async function editCart() {
    setIsLoading(true);

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

  async function deleteCart() {
    setIsLoading(true);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, pass);
    if (props.accessType == "Login") {
      await login();
    } else if (props.accessType == "Sign Up") {
      signUp();
    }
  };

  return (
    <>
      <Box height="auto" width={1}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            height="100vh"
            width={0.8}
            margin="0 auto"
          >
            <Grid
              item
              container
              flexDirection="column"
              justifyContent="start"
              width={0.5}
              height={1}
            >
              <Grid
                item
                container
                flexDirection="column"
                justifyContent="space-evenly"
                alignItems="center"
                height={0.3}
              >
                <Grid item fontSize={44}>
                  Amey Jewellery
                </Grid>
                <Grid item fontSize={30} fontWeight={800}>
                  {props.accessType}
                </Grid>
              </Grid>
              <Grid
                item
                container
                flexDirection="column"
                alignItems="center"
                justifyContent="space-evenly"
                padding="1rem"
                height={0.6}
              >
                {props.accessType !== "Sign Up" ? (
                  ""
                ) : (
                  <Grid
                    item
                    container
                    flexDirection="column"
                    justifyContent="space-evenly"
                    alignItems="start"
                    width={0.8}
                    gap={2}
                  >
                    <Grid item>Name</Grid>
                    <Grid item width={1}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        size="big"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        required
                      />
                    </Grid>
                  </Grid>
                )}
                <Grid
                  item
                  container
                  flexDirection="column"
                  justifyContent="space-evenly"
                  alignItems="start"
                  width={0.8}
                  gap={2}
                >
                  <Grid item>Email Address</Grid>
                  <Grid item width={1}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      size="big"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </Grid>
                </Grid>
                {props.accessType == "Recover" ? (
                  ""
                ) : (
                  <Grid
                    item
                    container
                    flexDirection="column"
                    justifyContent="space-evenly"
                    alignItems="start"
                    width={0.8}
                    gap={2}
                  >
                    <Grid item textAlign="start">
                      Password
                    </Grid>
                    <Grid item width={1}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        size="big"
                        onChange={(e) => {
                          setPass(e.target.value);
                        }}
                        required
                      />
                    </Grid>
                  </Grid>
                )}

                <Grid item width={0.5}>
                  <Button
                    variant="outlined"
                    size="big"
                    fullWidth
                    onClick={handleSubmit}
                  >
                    {props.accessType}
                  </Button>
                  <Button
                    variant="outlined"
                    size="big"
                    fullWidth
                    onClick={getCart}
                  >
                    check cart
                  </Button>
                  <Button
                    variant="outlined"
                    size="big"
                    fullWidth
                    onClick={getCartFull}
                  >
                    check full cart
                  </Button>
                  <Button
                    variant="outlined"
                    size="big"
                    fullWidth
                    onClick={editCart}
                  >
                    post cart
                  </Button>
                  <Button
                    variant="outlined"
                    size="big"
                    fullWidth
                    onClick={deleteCart}
                  >
                    delete cart
                  </Button>
                </Grid>
                {props.accessType == "Login" ? (
                  <Grid item container justifyContent="space-evenly">
                    <Grid item component={RouterLink} to="/account/signup">
                      Don't have account?
                    </Grid>
                    <Grid item component={RouterLink} to="/account/recover">
                      Forgot password?
                    </Grid>
                  </Grid>
                ) : (
                  <Grid item component={RouterLink} to="/account/login">
                    Have an account?
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}

export default AccessAccountPage;
