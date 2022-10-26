import React from "react";
import styles from "./CheckoutComplete.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

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
          to="/shop"
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
