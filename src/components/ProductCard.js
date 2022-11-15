import React, { useState } from "react";
import styles from "./ProductCard.module.css";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Link as RouterLink } from "react-router-dom";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/index";

function ProductCard(props) {
  const [open, setOpen] = useState(false);

  /* --------- redux ------------*/

  const shop = useSelector((state) => state.shop.shop);

  const dispatch = useDispatch();

  const addCartHandler = () => {
    dispatch(
      cartActions.addCart({
        name: props.cardName,
        quantity: 1,
        ...shop[props.cardName],
      })
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /* ------------------------------ */

  // Using Paper for the product card ??
  // Paper according to net ninja https://www.youtube.com/watch?v=GYTN5JdkLSQ&ab_channel=TheNetNinja
  // is basically meant to look like paper on a screen with some elevation.
  // quick info instead on the image.
  // whole product card to be in the paper
  // https://codes4education.com/wp-content/uploads/2020/10/CSS-Creative-Product-Card-UI-Design-E-commerce-Card-Using-Html5-CSS3-Code4Education-min.jpg

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
      <Card sx={paperStyles} elevation={2}>
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
              image={props.img}
              alt="ring"
              sx={{
                height: "100%",
                width: "100%",
                borderRadius: "20px",
              }}
            />
          </Box>

          <div className={styles["card-info"]}>Handmade {props.type}</div>
          <div className={styles["card-price"]}>{props.price}</div>
          <div className={styles["card-delivery"]}>FREE UK delivery</div>
          <div className={styles["btn-purchase"]}>
            <Button
              variant="contained"
              size="small"
              component={RouterLink}
              to={`/product/handmade-${props.type.replaceAll(" ", "-")}`}
            >
              Buy Now
            </Button>
            <Button variant="contained" size="small" onClick={addCartHandler}>
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
        PaperProps={{
          sx: {
            height: "90%",
            maxWidth: "70%",

            display: "flex",
            flexDirection: "row",
            flex: "1 1 50%",
            borderRadius: "20px",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <CardMedia
          component="img"
          image={props.img}
          alt="ring"
          sx={{
            height: "80%",
            width: "80vh",
            marginLeft: "4%",
            borderRadius: "20px",
          }}
        ></CardMedia>
        <DialogContent
          sx={{
            height: "60vh",
            lineHeight: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles["dialog-container"]}>
            <DialogTitle>Quick Info </DialogTitle>
            <div className={styles["dialog-item"]}>Handmade item </div>
            <div className={styles["dialog-item"]}>
              Handmade item Dispatches from a small business in United Kingdom
            </div>
            <div className={styles["dialog-item"]}>
              Materials: copper FREE UK delivery
            </div>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProductCard;
