import { useState } from "react";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";

// 3rd party components.
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

// apis
import { loginAPI } from "../../services/Internal_API/AccountAPI/Access/LoginAPI";
import { SignUp } from "../../services/Internal_API/AccountAPI/Access/SignupAPI";

import { Helmet } from "react-helmet-async";

function CapitaliseEachWord(text) {
  // capitalises each word for params
  // This is used to make the AccessAccountPage title relevant to the page.
  const words = text.split("_");

  const title = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  return title;
}

function AccessAccountDesktop() {
  /*
  Page to login or sign up.
  */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const title = CapitaliseEachWord(params.accessType);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "Login") {
      const data = await loginAPI(setIsLoading, setIsError, email, pass);
      if (data === "error") {
        // set error
      } else {
        if (data.user_status === "member") {
          localStorage.setItem("username", data.name);
        } else if (data.user_status === "staff") {
          localStorage.setItem("username", data.email);
        }
        const userName = localStorage.getItem("username");
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("user_status", data.user_status);
        navigate(`/account/${data.user_status}/${userName}`);
      }
    } else if (title === "Sign Up") {
      await SignUp(setIsLoading, name, email, pass);
      const data = await loginAPI(setIsLoading, setIsError, email, pass);
      if (data.user_status === "member") {
        localStorage.setItem("username", data.name);
      } else if (data.user_status === "staff") {
        localStorage.setItem("username", data.email);
      }
      const userName = localStorage.getItem("username");
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("user_status", data.user_status);
      navigate(`/account/${data.user_status}/${userName}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${title}`}</title>
        <meta
          name="description"
          content="Create, login or recover your account at UniqueShopGB."
        />
        <link rel="canonical" href={`/account/${params.accessType}`} />
      </Helmet>
      {isLoading ? (
        <CircularProgress size="25rem" sx={{ margin: "auto" }} />
      ) : (
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
                    UniqueShopGB
                  </Grid>
                  <Grid item fontSize={30} fontWeight={800}>
                    {title}
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
                  {title === "Sign Up" && (
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
                          inputProps={{
                            "aria-label": "Name",
                          }}
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
                        inputProps={{
                          "aria-label": "Email",
                        }}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </Grid>
                  </Grid>
                  {["Login", "Sign Up"].includes(title) && (
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
                          type="password"
                          inputProps={{
                            "aria-label": "Password",
                          }}
                          onChange={(e) => {
                            setPass(e.target.value);
                          }}
                          required
                        />
                      </Grid>
                    </Grid>
                  )}
                  {isError && <div>Information entered is incorrect</div>}
                  <Grid item width={0.5} textAlign="center">
                    <Button
                      variant="outlined"
                      size="big"
                      fullWidth
                      onClick={handleSubmit}
                      aria-label={title}
                    >
                      {title}
                    </Button>
                  </Grid>
                  {title === "Login" ? (
                    <Grid item container justifyContent="space-evenly">
                      <Grid
                        item
                        component={RouterLink}
                        to="/account/sign_up"
                        aria-label="Link to sign up to shop"
                      >
                        Don't have account?
                      </Grid>
                      <Grid
                        item
                        component={RouterLink}
                        to="/account/recover"
                        aria-label="Link to recover account by email"
                      >
                        Forgot password?
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid
                      item
                      component={RouterLink}
                      to="/account/login"
                      aria-label="Link to Log in to shop"
                    >
                      Have an account?
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      )}
    </>
  );
}

export default AccessAccountDesktop;
