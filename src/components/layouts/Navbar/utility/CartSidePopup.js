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
import { getSpecificProduct } from "../../../services/Internal_API/ShopAPI/Products/ProductsAPI";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import _ from "lodash";
import CircularProgress from "@mui/material/CircularProgress";

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
    /* 
    props.product = the whole product itself which explains why description_long is inside of Cart.. 
    TODO: Look into props product later and prevent description long and short from being inside..
    */
    if (localStorage.getItem("isLogged") == "LOGGED_IN") {
      getCart(setIsLoading).then((user_cart) => {
        // essentially grabs the user's cart in the database,
        // then shoves the cart items it finds in redux and this component.

        setIsLoading(true);
        let user_cart_list = [];

        for (const [key, value] of Object.entries(user_cart)) {
          const card_id = key.slice(key.lastIndexOf(" ") + 1, key.length);
          const cardName = `card${value.product.id}`;
          const price = Number(value.product.price);
          const quantity = Number(value.quantity);
          const totalPrice = (price * quantity).toFixed(2);

          user_cart_list.push({
            key: cardName,
            ...value.product,
            quantity: quantity,
            price: totalPrice,
            data_id: card_id,
          });
        }
        dispatch(cartActions.replaceCart(user_cart_list));
        setIsLoading(false);
      });
    }
  }, []);

  function subtotalNum(total = false) {
    let itemNum = 0;

    if (cart.length == 0) {
      return 0;
    }

    cart.forEach((element) => {
      itemNum += Number(element.price);
    });
    if (total == false) {
      return itemNum.toFixed(2);
    }
    return (itemNum + 2).toFixed(2);
  }

  const CartHandler = (change_item, cart_item) => {
    // this code only executes if the user is logged in
    // if they are not logged in then updating the cart,
    // is solely done on redux.
    if (localStorage.getItem("isLogged") == "LOGGED_IN") {
      // use the product id to send the patch request
      // then change the current quantity dependant on the change_item value of the carthandler.
      let cart_id = cart_item.data_id;
      let product_id = cart_item.id;
      let new_quantity = cart_item.quantity;

      if (change_item == "add") {
        new_quantity++;
      } else if (change_item == "decrease") {
        new_quantity--;
      }
      patchCartItem(setIsLoading, cart_id, product_id, new_quantity);
    }
  };

  return (
    <Drawer
      anchor="right"
      open={props.isDrawerOpen}
      onClose={() => props.setIsDrawerOpen(false)}
      sx={{
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 400 },
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
                  key={item.key}
                >
                  <Box
                    component="img"
                    src={item.image_url}
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "30%",
                    }}
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
                        item.name.charAt(0).toUpperCase() +
                        item.name.substring(1)}
                    </Grid>
                    <Grid item container justifyContent="space-evenly">
                      <Grid item>Quantity: {item.quantity}</Grid>
                      <Grid
                        item
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          getSpecificProduct(setIsLoading, item.id).then(
                            (product) => {
                              dispatch(
                                cartActions.changeItem([
                                  "add",
                                  [item.id],
                                  product.price,
                                ])
                              );
                            }
                          );

                          CartHandler("add", item);
                        }}
                      >
                        <AddIcon></AddIcon>
                      </Grid>

                      <Grid
                        item
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          if (item.quantity - 1 == 0) {
                            // if quantity is zero, delete the cart item from user and redux
                            deleteCartItem(setIsLoading, item.data_id);
                            dispatch(
                              cartActions.changeItem(["delete", [item.id]])
                            );
                          } else {
                            getSpecificProduct(setIsLoading, item.id).then(
                              (product) => {
                                dispatch(
                                  cartActions.changeItem([
                                    "decrease",
                                    [item.id],
                                    product.price,
                                  ])
                                );
                              }
                            );
                            CartHandler("decrease", item);
                          }
                        }}
                      >
                        <RemoveIcon></RemoveIcon>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>{Number(item.price).toFixed(2)}</Grid>
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
              <Grid item>{subtotalNum() == 0 ? "" : `£ ${subtotalNum()}`}</Grid>
            </Grid>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>Delivery fee</Grid>
              <Grid item>{cart.length == 0 ? "" : "£2.00"}</Grid>
            </Grid>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>Total to pay</Grid>
              <Grid item>
                {subtotalNum() == 0 ? "" : `£ ${subtotalNum(true)}`}
              </Grid>
            </Grid>
            {subtotalNum() == 0 ? (
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
