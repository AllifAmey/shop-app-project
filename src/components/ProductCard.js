import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import img from "../img/Cards/Product/card-ring.avif";
import Link from "@mui/material/Link";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Link as RouterLink } from "react-router-dom";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function ProductCard() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Using Paper for the product card ??
  // Paper according to net ninja https://www.youtube.com/watch?v=GYTN5JdkLSQ&ab_channel=TheNetNinja
  // is basically meant to look like paper on a screen with some elevation.
  // quick info instead on the image.
  // whole product card to be in the paper

  const paperStyles = {
    height: "350px",
    width: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
  };

  return (
    <>
      <Card sx={paperStyles} elevation={3}>
        <div className={styles["card-container"]}>
          <Box
            component={Button}
            sx={{
              height: "100%",
              width: "100%",
              gridArea: "img",
              "&:hover": {
                background: "none",
              },
            }}
            onClick={handleClickOpen}
            disableRipple
          >
            <CardMedia
              component="img"
              height="140"
              image={img}
              alt="ring"
              sx={{
                height: "100%",
                width: "100%",
                borderRadius: "20px",
              }}
            />
          </Box>

          <div className={styles["card-info"]}>
            Handmade Flower Nature Design Wrist Pin Cushion
          </div>
          <div className={styles["card-price"]}>£3.99</div>
          <div className={styles["card-delivery"]}>FREE UK delivery</div>
          <div className={styles["btn-purchase"]}>
            <Button
              variant="contained"
              size="small"
              component={RouterLink}
              to="/product-info"
            >
              Buy Now
            </Button>
            <Button variant="contained" size="small" onClick={handleClickOpen}>
              Add Cart
            </Button>
          </div>
        </div>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ textAlign: "center", backgroundColor: "yellow" }}
        >
          Quick Info
        </DialogTitle>
        <DialogContent
          sx={{
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
