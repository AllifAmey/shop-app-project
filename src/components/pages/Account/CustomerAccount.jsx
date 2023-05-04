import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button, Container, Grid, Box, CircularProgress } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

// apis
import { cartActions } from "../../../store";
import { getCart } from "../../services/Internal_API/AccountAPI/Cart/CartAPI";
import { getOrders } from "../../services/Internal_API/AccountAPI/Orders/OrderAPI";

// utility
import NewCustomerNavBar from "./utility/Customer/CustomerNavBar";
import OrderDetailRender from "./utility/Customer/OrderDetailRender";
import ProductButtonRender from "./utility/Customer/ProductButtonRender";
import TotalAmountRender from "./utility/Customer/TotalAmountRender";
import calculateTotalAmount from "./utility/Customer/calculateTotalAmount";

const cartColumnDefs = [
  { field: "cart_item_id", headerName: "Cart item id" },
  { field: "product", cellRenderer: ProductButtonRender },
  { field: "quantity" },
  { field: "total price", cellRenderer: TotalAmountRender },
];

const orderColumnDefs = [
  { field: "id", headerName: "Order id" },
  { field: "order detail", cellRenderer: OrderDetailRender },
  {
    field: "date_ordered",
    headerName: "Date Ordered",
  },
  { field: "delivery_status", headerName: "Delivery Status" },
];

function CustomerAccount() {
  // inspiration
  // https://woocommerce.com/wp-content/uploads/2020/11/my-account-page-order-again.jpg
  const [navValue, setNavValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [rowData, setRowData] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gridRef = useRef();

  const [columnDefs, setColumnDefs] = useState(cartColumnDefs);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
  }));

  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  if (navValue == 0 && columnDefs[0].field !== "cart_item_id") {
    setColumnDefs(cartColumnDefs);
    getCart(setIsLoading).then((userCart) => {
      const total_cart_amount = calculateTotalAmount(userCart);
      dispatch(cartActions.replaceCart(userCart));
      const lastRowData = {
        cart_item_id: "",
        product: "",
        quantity: "",
        "total price":
          userCart.length === 0 ? "" : `Total amount : £${total_cart_amount}`,
      };
      setRowData([...userCart, lastRowData]);
    });
  } else if (navValue == 1 && columnDefs[0].field !== "id") {
    setColumnDefs(orderColumnDefs);
    getOrders(setIsLoading).then((orders) => {
      setRowData([...orders]);
    });
  }

  useEffect(() => {
    getCart(setIsLoading).then((userCart) => {
      const total_cart_amount = calculateTotalAmount(userCart);
      dispatch(cartActions.replaceCart(userCart));

      const lastRowData = {
        cart_item_id: "",
        product: "",
        quantity: "",
        "total price": total_cart_amount,
      };
      setRowData([...userCart, lastRowData]);
    });
  }, []);

  function logOut() {
    // this removes all of the localstorage as the data is no longer relevant.
    // logout is also set to false in the parent component , AccounPageRouting
    // this is to force a component to rerender to reflect new changes - usestate does that.
    localStorage.removeItem("Token");
    localStorage.removeItem("username");
    localStorage.removeItem("isLogged");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_status");
    navigate("/account/login/", { replace: true });
    dispatch(cartActions.replaceCart([]));
  }

  return (
    <>
      {isLoading ? (
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
              <Grid item justifyContent="center">
                Welcome back, {localStorage.getItem("username")}
              </Grid>
              <NewCustomerNavBar
                setNavValue={setNavValue}
                navValue={navValue}
              />
              <div
                className="ag-theme-material"
                style={{ width: 800, height: 500 }}
              >
                <AgGridReact
                  ref={gridRef}
                  rowData={rowData}
                  columnDefs={columnDefs}
                  animateRows={true}
                  rowSelection="multiple"
                  onCellClicked={cellClickedListener}
                  defaultColDef={defaultColDef}
                />
              </div>
              <Grid item container justifyContent="center" width="75vw">
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

export default CustomerAccount;
