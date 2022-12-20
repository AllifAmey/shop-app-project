import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { Link as RouterLink, redirect, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import LoginNav from "./utility/LoginNav";
import { getCart } from "../../services/Internal_API/AccountAPI/Cart/CartAPI";
import { getOrders } from "../../services/Internal_API/AccountAPI/Orders/OrderAPI";
import { cartActions } from "../../../store";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

const orderColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "order",
    headerName: "Order",

    width: 90,
  },
  {
    field: "totalPrice",
    headerName: "Total Price",
    type: "number",
    width: 150,
  },
  {
    field: "deliveryStatus",
    headerName: "Delivery Status",
    width: 150,
  },
];

const cartColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 90,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 90,
  },
  {
    field: "totalPrice",
    headerName: "Total Price",
    type: "number",
    width: 150,
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 90,
  },
];

const rows = [
  { id: 1, order: "Snow", totalPrice: 5.25, deliveryStatus: 35 },
  { id: 2, order: "Lannister", totalPrice: 5.5, deliveryStatus: 42 },
];

function LoggedAccount(props) {
  // inspiration
  // https://woocommerce.com/wp-content/uploads/2020/11/my-account-page-order-again.jpg
  const [navValue, setNavValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [rowValue, setrowValue] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // grab user's name and place it in the url
    let username = localStorage.getItem("username");
    if (username != undefined) {
      navigate(`/account/${username}/`, { replace: true });
    }
    // grab the user's cart and store into frontend's cart
    /* 
    props.product = the whole product itself which explains why description_long is inside of Cart.. 
    TODO: Look into props product later and prevent description long and short from being inside..
    */
    getCart(setIsLoading).then((user_cart) => {
      setIsLoading(true);
      let user_cart_list = [];
      let user_cart_row = [];
      for (const [key, value] of Object.entries(user_cart)) {
        const card_id = key.slice(key.lastIndexOf(" ") + 1, key.length);
        //const cardName = `card${card_id}`;
        const cardName = `card${value.product.id}`;
        const price = Number(value.product.price);
        const quantity = Number(value.quantity);
        const totalPrice = (price * quantity).toFixed(2);

        user_cart_list.push({
          key: cardName,
          ...value.product,
          quantity: quantity,
          price: totalPrice,
        });

        user_cart_row.push({
          id: card_id,
          product: value.product.name,
          quantity: quantity,
          totalPrice: totalPrice,
        });
      }
      dispatch(cartActions.replaceCart(user_cart_list));
      setrowValue(user_cart_row);
      setIsLoading(false);
    });
  }, []);

  function logOut() {
    localStorage.removeItem("Token");
    localStorage.removeItem("username");
    localStorage.removeItem("isLogged");

    props.logOut(false);
  }

  return (
    <>
      {isLoading ? (
        <Grid container justifyContent="center">
          <CircularProgress size="25rem" sx={{ margin: "auto" }} />
        </Grid>
      ) : rowValue == undefined ? (
        <Grid container justifyContent="center">
          <CircularProgress size="25rem" sx={{ margin: "auto" }} />
        </Grid>
      ) : (
        <Box height="100vh">
          <Container maxWidth="lg">
            <Grid
              padding="2rem 0"
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Grid item container justifyContent="center">
                <LoginNav
                  setIsLoading={setIsLoading}
                  setrowValue={setrowValue}
                  setNavValue={setNavValue}
                  navValue={navValue}
                ></LoginNav>
              </Grid>
              <Grid item container justifyContent="center" width="75vw">
                <div style={{ height: 400, width: "60%" }}>
                  <DataGrid
                    rows={rowValue}
                    columns={navValue == 0 ? cartColumns : orderColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                  />
                </div>
              </Grid>
              <Grid item container justifyContent="center">
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/account/login"
                  onClick={logOut}
                >
                  Log out
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
}

export default LoggedAccount;
