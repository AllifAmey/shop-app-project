import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { Link as RouterLink, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import AccessAccountPage from "./AccessAccountPage";

function AccountPage() {
  // routing

  // formType

  const params = useParams();

  if (params.accessType == "login") {
    const accessType = "Login";
    return (
      <>
        <AccessAccountPage accessType={accessType}></AccessAccountPage>
      </>
    );
  }

  if (params.accessType == "signup") {
    const accessType = "Sign Up";
    return (
      <>
        <AccessAccountPage accessType={accessType}></AccessAccountPage>
      </>
    );
  }
  if (params.accessType == "recover") {
    const accessType = "Recover";
    return (
      <>
        <AccessAccountPage accessType={accessType}></AccessAccountPage>
      </>
    );
  }

  return <>Hello</>;
}

export default AccountPage;
