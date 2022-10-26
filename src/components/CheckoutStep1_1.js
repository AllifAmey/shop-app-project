import React from "react";
import styles from "./pages/CheckoutPage.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function CheckoutStep1_1(props) {
  return (
    <>
      <div className={styles["contact-container"]}>
        <div className={styles["section-title"]}>Delivery Contact</div>
        <div className={styles["first-name"]}>
          <div className={styles["contact-title"]}>First Name</div>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            size="small"
          />
        </div>
        <div className={styles["last-name"]}>
          <div className={styles["contact-title"]}>Last Name</div>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            size="small"
          />
        </div>
        <div className={styles["email"]}>
          <div className={styles["contact-title"]}>Email Address</div>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            size="small"
          />
        </div>
        <div className={styles["phone"]}>
          <div className={styles["contact-title"]}>Phone</div>
          <TextField
            id="outlined-basic"
            label="Phone"
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

export default CheckoutStep1_1;
