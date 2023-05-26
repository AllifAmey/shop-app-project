import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../../store/index";
import {
  getCart,
  patchCartItem,
  postCart,
} from "../../../../services/Internal_API/AccountAPI/Cart/CartAPI";

function ProductCardTablet(props) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* --------- redux ------------*/
  const cartRedux = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addCartHandler = () => {
    if (localStorage.getItem("isLogged") === "LOGGED_IN") {
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
    } else if (localStorage.getItem("isLogged") !== "LOGGED_IN") {
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
    height: "300px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    border: "1px solid #96f2d7",
    fontSize: "14px",
  };
  return (
    <>
      <Card sx={paperStyles} elevation={2}>
        <Box
          component={Button}
          sx={{
            height: "120px",
            width: "120px",
            "&:hover": {
              background: "none",
            },
          }}
          onClick={handleClickOpen}
          disableRipple
          aria-label="Popup for more product info"
        >
          <CardMedia
            component="img"
            src={props.product.image_url}
            alt={props.product.name}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </Box>
        <Grid
          item
          fontSize="20px"
          textAlign="start"
        >{`Handmade ${props.product.name}`}</Grid>
        <Grid container width="100%" justifyContent="space-around">
          <Grid item>{`£${props.product.price}`}</Grid>
          <Grid item>FREE UK delivery</Grid>
        </Grid>

        <Grid container width="100%" justifyContent="space-evenly">
          <RouterLink
            to={`/product/handmade-${props.product.name
              .toLowerCase()
              .replaceAll(" ", "-")}-${props.product.id}`}
            title="Details"
          >
            <Button
              variant="contained"
              aria-label={`Button link to ${props.product.name} detail page`}
            >
              Details
            </Button>
          </RouterLink>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              variant="contained"
              onClick={addCartHandler}
              aria-label={`Add ${props.product.name} to cart`}
            >
              Add Cart
            </Button>
          )}
        </Grid>
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
          alt={`Large ${props.product.name}`}
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
          <DialogTitle fontSize={30}>Quick Info</DialogTitle>
          <div>Handcrafted item</div>
          <div>Dispatches from a small business in United Kingdom</div>
          <div>Materials: copper</div>
          <div>FREE UK delivery</div>
          <DialogActions>
            <Button onClick={handleClose} size="big" aria-label="Close Popup">
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProductCardTablet;
