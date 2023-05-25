import React, { useState, useEffect } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import {
  getCart,
  patchCartItem,
  deleteCartItem,
} from "../../../services/Internal_API/AccountAPI/Cart/CartAPI";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CartSidePopup(props) {
  // https://codesandbox.io/s/6ncow?file=/src/App.tsx inspiration for cartsidepopup

  /*
  docs:

  A list of products pop up when the cart icon is clicked.
  These products are dependant on redux
  The drawer(popup) opens dependant on the parent component
  props.isDrawerOpen
  and the value of that prop is set in the draw as well when,
  onClose is triggered.
  
  */

  const [isLoading, setIsLoading] = useState(false);

  // redux
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // grab the user's cart and store into frontend's cart
    if (localStorage.getItem("isLogged") === "LOGGED_IN") {
      getCart(setIsLoading).then((user_cart) => {
        setIsLoading(true);
        dispatch(cartActions.replaceCart(user_cart));
        setIsLoading(false);
      });
    }
  }, []);

  function subtotalNum(total = false) {
    let itemNum = 0;

    if (cart.length === 0) {
      return 0;
    }

    cart.forEach((cartItem) => {
      itemNum += Number(cartItem.product.price * cartItem.quantity);
    });
    if (total === false) {
      return itemNum.toFixed(2);
    }
    return (itemNum + 2).toFixed(2);
  }

  const CartHandler = (change_item, cart_item) => {
    if (localStorage.getItem("isLogged") === "LOGGED_IN") {
      let cart_item_id = cart_item.cart_item_id;
      let product_id = cart_item.product.id;
      let existing_quantity = cart_item.quantity;

      if (change_item === "delete") {
        deleteCartItem(setIsLoading, cart_item_id);
        dispatch(cartActions.deleteSpecificCartItem(cart_item_id));
        return;
      }
      if (change_item === "increase") {
        existing_quantity++;
      } else if (change_item === "decrease") {
        existing_quantity--;
      }
      patchCartItem(
        setIsLoading,
        cart_item_id,
        product_id,
        existing_quantity
      ).then((_) => {
        dispatch(cartActions.changeExistingItem([change_item, cart_item_id]));
      });
    } else {
      if (change_item === "delete") {
        dispatch(
          cartActions.deleteSpecificCartItem([
            cart_item.product.id,
            "anonymous",
          ])
        );
      } else {
        dispatch(
          cartActions.changeExistingItem([
            change_item,
            cart_item.product.id,
            "anonymous",
          ])
        );
      }
    }
  };

  return (
    <Drawer
      anchor="right"
      open={props.isDrawerOpen}
      onClose={() => props.setIsDrawerOpen(false)}
      sx={{
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "80%" },
      }}
    >
      <Box sx={{ height: "80%", overflowY: "scroll" }}>
        <Container sx={{}}>
          <Grid container direction="column">
            {cart.map((item) => {
              return (
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ height: "5rem" }}
                  key={item.product.id}
                >
                  <Box
                    component="img"
                    src={item.product.image_url}
                    alt={item.product.name}
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "30%",
                    }}
                    loading="lazy"
                  ></Box>
                  <Grid
                    container
                    direction="column"
                    sx={{ width: "40%" }}
                    gap={2}
                  >
                    <Grid item>
                      Handmade
                      {" " +
                        item.product.name.charAt(0).toUpperCase() +
                        item.product.name.substring(1)}
                    </Grid>
                    <Grid item container justifyContent="space-evenly">
                      <Grid item>Quantity: {item.quantity}</Grid>
                      <Grid
                        item
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          CartHandler("increase", item);
                        }}
                      >
                        <AddIcon titleAccess="Add item by 1"></AddIcon>
                      </Grid>

                      <Grid
                        item
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          if (item.quantity - 1 === 0) {
                            CartHandler("delete", item);
                          } else {
                            CartHandler("decrease", item);
                          }
                        }}
                      >
                        <RemoveIcon titleAccess="Reduce item by 1"></RemoveIcon>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    {Number(item.product.price * item.quantity).toFixed(2)}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ height: "25%" }}>
        <Container sx={{ padding: "1rem" }}>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            gap={1}
          >
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>Subtotal</Grid>
              <Grid item>
                {subtotalNum() === 0 ? "" : `£ ${subtotalNum()}`}
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>Delivery fee</Grid>
              <Grid item>{cart.length === 0 ? "" : "£2.00"}</Grid>
            </Grid>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>Total to pay</Grid>
              <Grid item>
                {subtotalNum() === 0 ? "" : `£ ${subtotalNum(true)}`}
              </Grid>
            </Grid>
            {subtotalNum() === 0 ? (
              ""
            ) : (
              <Grid container direction="row" justifyContent="center">
                <Button
                  variant="contained"
                  size="big"
                  component={RouterLink}
                  to="/checkout"
                  onClick={() => props.setIsDrawerOpen(false)}
                >
                  Checkout
                </Button>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </Drawer>
  );
}

export default CartSidePopup;
