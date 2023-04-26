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
import { cartActions } from "../../../store/index";
import {
  getCart,
  patchCartItem,
  postCart,
} from "../../services/Internal_API/AccountAPI/Cart/CartAPI";

function ProductCard(props) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* --------- redux ------------*/
  const cartRedux = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addCartHandler = () => {
    if (localStorage.getItem("isLogged") == "LOGGED_IN") {
      getCart(setIsLoading).then((user_cart) => {
        setIsLoading(true);
        const existingCartItem = user_cart.find(
          (cart_item) => cart_item.product.id === props.product.id
        );
        if (!existingCartItem) {
          postCart(setIsLoading, props.product.id).then((new_cartItem) => {
            dispatch(cartActions.addNewCartItem(new_cartItem));
          });
        } else {
          patchCartItem(
            setIsLoading,
            existingCartItem.cart_item_id,
            props.product.id,
            existingCartItem.quantity + 1
          ).then((new_cartItem) => {
            dispatch(
              cartActions.changeExistingItem(["increase", new_cartItem.id])
            );
          });
        }
      });
    } else if (localStorage.getItem("isLogged") != "LOGGED_IN") {
      // if user not logged in just pass the product id
      const existingCartItem = cartRedux.find(
        (cart_item) => cart_item.product.id === props.product.id
      );
      if (!existingCartItem) {
        dispatch(
          cartActions.addNewCartItem({
            quantity: 1,
            product: props.product,
          })
        );
      } else {
        dispatch(
          cartActions.changeExistingItem([
            "increase",
            props.product.id,
            "anonymous",
          ])
        );
      }
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
    border: "1px solid #96f2d7",
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
              width="184"
              src={props.product.image_url}
              alt={props.product.catagory}
              sx={{
                borderRadius: "20px",
              }}
            />
          </Box>

          <div className={styles["card-info"]}>
            Handmade {props.product.type}
          </div>
          <div
            className={styles["card-price"]}
          >{`£${props.product.price}`}</div>
          <div className={styles["card-delivery"]}>FREE UK delivery</div>
          <div className={styles["btn-purchase"]}>
            <Button
              variant="contained"
              size="big"
              component={RouterLink}
              to={`/product/handmade-${props.product.name
                .toLowerCase()
                .replaceAll(" ", "-")}-${props.product.id}`}
            >
              Details
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
          image={props.product.image_url}
          alt={props.product.catagory}
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
