import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {
  Link as RouterLink,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { useDispatch } from "react-redux";

// 3rd party components.
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

// apis & store
import { cartActions } from "../../../store";
import { getCart } from "../../services/Internal_API/AccountAPI/Cart/CartAPI";
import { getOrders } from "../../services/Internal_API/AccountAPI/Orders/OrderAPI";

// utility
import CustomerNavBar from "./utility/Customer/CustomerNavBar";
import OrderDetailRender from "./utility/Customer/OrderDetailRender";
import ProductButtonRender from "./utility/Customer/ProductButtonRender";
import TotalAmountRender from "./utility/Customer/TotalAmountRender";
import calculateTotalAmount from "./utility/Customer/calculateTotalAmount";

import { Helmet } from "react-helmet-async";

function CustomerAccount() {
  // inspiration
  // https://woocommerce.com/wp-content/uploads/2020/11/my-account-page-order-again.jpg

  const context = useOutletContext();

  const cartColumnDefs = [
    {
      field: "cart_item_id",
      headerName: context.isMobile ? "id" : "Cart item id",
    },
    {
      field: "product",
      cellRenderer: ProductButtonRender,
      cellRendererParams: {
        isMobile: context.isMobile,
      },
    },
    { field: "quantity", headerName: context.isMobile ? "Qt" : "Quantity" },
    {
      field: "total price",
      headerName: context.isMobile ? "Total" : "Total Price",
      cellRenderer: TotalAmountRender,
      cellRendererParams: {
        isMobile: context.isMobile,
      },
    },
  ];

  const orderColumnDefs = [
    {
      field: "id",
      headerName: context.isMobile ? "id" : "Order id",
      flex: context.isMobile ? 1.2 : 1,
    },
    {
      field: "order detail",
      headerName: context.isMobile ? "Detail" : "Order Detail",
      cellRenderer: OrderDetailRender,
      cellRendererParams: {
        isMobile: context.isMobile,
      },
      flex: context.isMobile ? 1.5 : 1,
    },
    {
      field: "date_ordered",
      headerName: context.isMobile ? "Date" : "Date Ordered",
      flex: context.isMobile ? 2 : 1,
    },
    {
      field: "delivery_status",
      headerName: context.isMobile ? "Status" : "Delivery Status",
      flex: context.isMobile ? 2 : 1,
    },
  ];

  const [navValue, setNavValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState(cartColumnDefs);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gridRef = useRef();

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
  }));
  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  if (navValue === 0 && columnDefs[0].field !== "cart_item_id") {
    setColumnDefs(cartColumnDefs);
    getCart(setIsLoading).then((userCart) => {
      const total_cart_amount = calculateTotalAmount(userCart);
      dispatch(cartActions.replaceCart(userCart));
      const lastRowData = {
        cart_item_id: "",
        product: "",
        quantity: "",
        "total price": userCart.length === 0 ? "" : total_cart_amount,
      };
      setRowData([...userCart, lastRowData]);
    });
  } else if (navValue === 1 && columnDefs[0].field !== "id") {
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
      <Helmet>
        <title>{`${localStorage.getItem("username")}'s Account`}</title>
        <meta
          name="description"
          content="See your orders and cart through a dashboard at UniqueShopGB"
        />
        <link
          rel="canonical"
          href={`/account/${localStorage.getItem(
            "user_status"
          )}/${localStorage.getItem("username")}`}
        />
      </Helmet>
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
              <CustomerNavBar
                setNavValue={setNavValue}
                navValue={navValue}
                isDesktop={context.isDesktop}
                isTablet={context.isTablet}
                isMobile={context.isMobile}
              />
              <div
                className="ag-theme-material"
                style={{ width: context.isMobile ? "100%" : 800, height: 500 }}
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
