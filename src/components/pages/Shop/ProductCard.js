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
import { useDispatch } from "react-redux";
import { cartActions, shopActions } from "../../../store/index";
import {
  getCart,
  patchCartItem,
  postCart,
} from "../../services/Internal_API/AccountAPI/Cart/CartAPI";
import _ from "lodash";

function ProductCard(props) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* --------- redux ------------*/

  const dispatch = useDispatch();

  const addCartHandler = () => {
    // TODO: Error starts here. Find way to add data_id to cart to allow users to add and subtract items.

    if (localStorage.getItem("isLogged") == "LOGGED_IN") {
      // grab user's cart and loop through returned data
      // then compare the data.products and see if it is the same.
      // if it is then record the id and then put it into the next api call.

      getCart(setIsLoading).then((user_cart) => {
        setIsLoading(true);

        let cart_id = undefined;
        let product_id = undefined;
        let existing_quantity = undefined;
        for (const [key, value] of Object.entries(user_cart)) {
          if (_.isEqual(value.product, props.product)) {
            cart_id = Number(key.slice(key.lastIndexOf(" ") + 1, key.length));
            product_id = Number(value.product.id);
            existing_quantity = Number(value.quantity);
          }
        }
        setIsLoading(false);
        if (
          cart_id != undefined &&
          product_id != undefined &&
          existing_quantity != undefined
        ) {
          // then do a patch request
          patchCartItem(setIsLoading, cart_id, product_id, existing_quantity);
        } else if (
          cart_id === undefined &&
          product_id === undefined &&
          existing_quantity === undefined
        ) {
          // then create a new cart item.

          postCart(setIsLoading, props.product.id).then((new_cartItem) => {
            dispatch(
              cartActions.addCart({
                key: props.cardName,
                quantity: 1,
                ...props.product,
                price: Number(props.price),
                data_id: new_cartItem.id,
              })
            );
          });
        }
      });
    } else if (localStorage.getItem("isLogged") != "LOGGED_IN") {
      // if user not logged in just pass the product id
      dispatch(
        cartActions.addCart({
          key: props.cardName,
          quantity: 1,
          ...props.product,
          price: Number(props.price),
        })
      );
    }
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
              src={props.img}
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
              size="big"
              component={RouterLink}
              to={`/product/handmade-${props.type.replaceAll(" ", "-")}-${
                props.product.id
              }`}
            >
              Buy Now
            </Button>
            <Button variant="contained" size="medium" onClick={addCartHandler}>
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
            <DialogTitle fontSize={30}>Quick Info </DialogTitle>
            <div className={styles["dialog-item"]}>Handmade item </div>
            <div className={styles["dialog-item"]}>
              Handmade item Dispatches from a small business in United Kingdom
            </div>
            <div className={styles["dialog-item"]}>Materials: copper</div>
            <div className={styles["dialog-item"]}>FREE UK delivery</div>
            <DialogActions>
              <Button onClick={handleClose} size="big">
                Close
              </Button>
            </DialogActions>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProductCard;
