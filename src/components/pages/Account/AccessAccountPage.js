import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { loginAPI } from "../../services/Internal_API/AccountAPI/Access/LoginAPI";

function AccessAccountPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [cartId, setcartId] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  async function signUp() {
    setIsLoading(true);

    const response = await fetch(
      "https://maininfo.ameyshopukbackend.com/api/user/create/",
      {
        method: "POST",
        body: JSON.stringify({ name: name, email: email, password: pass }),
        headers: { "Content-type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);

    setIsLoading(false);
  }

  async function getCart() {
    setIsLoading(true);

    const token = localStorage.getItem("Token");
    console.log(`My token is ${token}`);

    const response = await fetch(
      "https://maininfo.ameyshopukbackend.com/api/shop/cart/",
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
    setcartId(data.id);

    setIsLoading(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.accessType == "Login") {
      await loginAPI(setIsLoading, props.login, email, pass);
    } else if (props.accessType == "Sign Up") {
      await signUp();
      await loginAPI(setIsLoading, props.login, email, pass);
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
