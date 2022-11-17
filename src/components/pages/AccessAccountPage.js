import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function AccessAccountPage(props) {
  return (
    <>
      <Box height="auto" width={1}>
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
              <Grid item fontSize={30}>
                Amey Jewellery
              </Grid>
              <Grid item fontSize={24} fontWeight={800}>
                {props.accessType}
              </Grid>
            </Grid>
            <Grid
              item
              container
              flexDirection="column"
              alignItems="center"
              justifyContent="space-evenly"
              sx={{ background: "#e3fafc" }}
              padding="1rem"
              height={0.6}
            >
              <Grid
                item
                container
                flexDirection="column"
                justifyContent="space-evenly"
                alignItems="start"
                width={0.8}
                gap={1}
              >
                <Grid item>Email Address</Grid>
                <Grid item width={1}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size="small"
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
                  gap={1}
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
                      size="small"
                    />
                  </Grid>
                </Grid>
              )}

              <Grid item width={0.5}>
                <Button variant="outlined" size="small" fullWidth>
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
      </Box>
    </>
  );
}

export default AccessAccountPage;
