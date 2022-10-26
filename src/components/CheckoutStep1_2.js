import React from "react";
import styles from "./CheckoutStep1_2.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function CheckoutStep1_2(props) {
  return (
    <>
      <div className={styles["contact-container"]}>
        <div className={styles["section-title"]}>Address Info</div>
        <div className={styles["address-info"]}>
          <div className={styles["contact-title"]}>Address</div>
          <TextField
            id="outlined-basic"
            label="Address line 1"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Address line 2"
            variant="outlined"
            size="small"
          />
        </div>
        <div className={styles["city"]}>
          <div className={styles["contact-title"]}>City</div>
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            size="small"
          />
        </div>
        <div className={styles["postcode"]}>
          <div className={styles["contact-title"]}>Postcode</div>
          <TextField
            id="outlined-basic"
            label="Postcode"
            variant="outlined"
            size="small"
          />
        </div>
        <div className={styles["country"]}>
          <div className={styles["contact-title"]}>Country</div>
          <TextField
            id="outlined-basic"
            label="Country"
            variant="outlined"
            size="small"
          />
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

export default CheckoutStep1_2;
