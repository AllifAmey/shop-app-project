import React, { useState } from "react";
import { styled } from "@mui/system";
import styles from "./CheckoutStep3.module.css";
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

function CheckoutStep3(props) {
  /*
    Payment Step

    https://assets.materialup.com/uploads/26835f88-f345-4bbd-ac07-a6a553311538/preview.png Inspiration

    Card number inspiration: 
    https://assets.materialup.com/uploads/6ec7f467-26ee-49b8-9ca0-542f6ff8b8e4/preview.png

    */
  return (
    <>
      <div className={styles["section-container"]}>
        <div className={styles["payment-cNumber"]}>
          <div className={styles["payment-title"]}>Card Number</div>
          <div className={styles["cardnumber-container"]}>
            <TextField
              id="outlined-basic"
              label="Card Number"
              variant="outlined"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Card Number"
              variant="outlined"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Card Number"
              variant="outlined"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Card Number"
              variant="outlined"
              size="small"
            />
          </div>
        </div>
        <div className={styles["payment-cValid"]}>
          <div className={styles["payment-title"]}>Valid Until</div>
          <div className={styles["payment-field"]}>
            <TextField
              id="outlined-basic"
              label="Valid Until"
              variant="outlined"
              size="small"
            />
          </div>
        </div>
        <div className={styles["payment-cCVV"]}>
          <div className={styles["payment-title"]}>CVV</div>
          <div className={styles["payment-field"]}>
            <TextField
              id="outlined-basic"
              label="CVV"
              variant="outlined"
              size="small"
            />
          </div>
        </div>
        <div className={styles["payment-cName"]}>
          <div className={styles["payment-title"]}>Card Holder Name</div>
          <div className={styles["payment-field"]}>
            <TextField
              id="outlined-basic"
              label="Card Holder Name"
              variant="outlined"
              size="small"
              fullWidth="true"
            />
          </div>
        </div>
        <div className={styles["btn"]}>
          <Button
            variant="text"
            size="big"
            onClick={props.onCount}
            style={{ fontSize: "16px" }}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
}

export default CheckoutStep3;
