import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import img from "../img/Cards/Product/card-ring.avif";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import CustomButton from "./CustomButton";

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: "#ededdf",
    },
  },
});

function ProductCard() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["card-container"]}>
          <img src={img} alt="jewellery" className={styles["card-img"]}></img>
          <div className={styles["card-info"]}>
            Handmade Flower Nature Design Wrist Pin Cushion
          </div>
          <div className={styles["card-price"]}>£3.99</div>
          <div className={styles["card-delivery"]}>FREE UK delivery</div>
          <div className={styles["btn-purchase"]}>
            <CustomButton colour="#ced4da"></CustomButton>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              text="Quick Info"
              style={{
                fontSize: "10px",
                backgroundColor: "#ced4da",
                color: "#000",
              }}
              size="small"
            >
              Quick Info
            </Button>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
          Quick Info
        </DialogTitle>
        <DialogContent
          sx={{
            height: "40vh",
            width: "40vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles["dialog-container"]}>
            <div className={styles["dialog-item"]}>Handmade item </div>
            <div className={styles["dialog-item"]}>
              Handmade item Dispatches from a small business in United Kingdom
            </div>
            <div className={styles["dialog-item"]}>
              Materials: copper FREE UK delivery
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ProductCard;
