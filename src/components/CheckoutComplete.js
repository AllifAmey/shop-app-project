import React, { useState } from "react";
import { styled } from "@mui/system";
import styles from "./CheckoutComplete.module.css";
import img from "../img/Cards/Product/card-ring.avif";
import { Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CheckoutStep1_2 from "./CheckoutStep1_2";
import CheckoutStep1_1 from "./CheckoutStep1_1";
import CheckoutSteps from "./CheckoutSteps";

function CheckoutComplete(props) {
  /*
  Look into dialog material ui perhaps. Or the snackbar material ui one 
  */
  return (
    <>
      <div className={styles["section-container"]}>
        <h2>Success</h2>
        <Button
          variant="contained"
          size="small"
          to="/product"
          LinkComponent={Link}
          onClick={props.onCount}
          style={{ fontSize: "16px" }}
        >
          Shop
        </Button>
      </div>
    </>
  );
}

export default CheckoutComplete;
