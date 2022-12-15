import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { Link as RouterLink, redirect, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { DataGrid } from "@mui/x-data-grid";
import { PropaneSharp } from "@mui/icons-material";

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Orders" icon={<LocalShippingIcon />} />
        <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
      </BottomNavigation>
    </Box>
  );
}

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "Order",
    headerName: "Order",
    type: "number",
    width: 90,
  },
  {
    field: "Total Price",
    headerName: "Total Price",
    type: "number",
    width: 150,
  },
  {
    field: "Delivery Status",
    headerName: "Delivery Status",
    type: "string",
    width: 150,
  },
];

const rows = [
  { id: 1, order: "Snow", totalPrice: "Jon", deliveryStatus: 35 },
  { id: 2, order: "Lannister", totalPrice: "Cersei", deliveryStatus: 42 },
];

function DataTable() {
  const [isLoading, setIsLoading] = useState(false);

  async function getCart() {
    // this grabs the
    setIsLoading(true);

    const token = localStorage.getItem("Token");

    const response = await fetch("http://localhost:8000/api/shop/cart/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);

    setIsLoading(false);
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div style={{ height: 400, width: "60%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

function LoggedAccount(props) {
  // inspiration
  // https://woocommerce.com/wp-content/uploads/2020/11/my-account-page-order-again.jpg
  const navigate = useNavigate();

  useEffect(() => {
    let username = localStorage.getItem("username");
    console.log(username);
    if (username != undefined) {
      navigate(`/account/${username}/`, { replace: true });
    }
  }, []);

  function logOut() {
    localStorage.removeItem("Token");
    localStorage.removeItem("username");
    localStorage.removeItem("isLogged");

    props.logOut(false);
  }

  return (
    <>
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
              <SimpleBottomNavigation></SimpleBottomNavigation>
            </Grid>
            <Grid item container justifyContent="center" width="75vw">
              <DataTable></DataTable>
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
    </>
  );
}

export default LoggedAccount;
