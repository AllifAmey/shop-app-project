import React from "react";
import styles from "./CheckoutStep3.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function CheckoutStep3(props) {
  /*
    Payment Step

    https://assets.materialup.com/uploads/26835f88-f345-4bbd-ac07-a6a553311538/preview.png Inspiration

    Card number inspiration: 
    https://assets.materialup.com/uploads/6ec7f467-26ee-49b8-9ca0-542f6ff8b8e4/preview.png

    Just a note: 
    https://github.com/mui/material-ui/blob/649ef2e34c10c90788b7506e88958c91f87f924c/src/TextField/TextField.js#L171
    https://stackoverflow.com/questions/35093107/how-to-override-the-width-of-a-textfield-component-with-react-mui

    The stackoverflow answer seems to indicate that I have to look directly at the code and its documentation to ,
    fully comprehend the material ui component as opposed to looking at the site's documentation. 

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
