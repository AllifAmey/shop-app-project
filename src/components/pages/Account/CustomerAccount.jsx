import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
// modal
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CardMedia from "@mui/material/CardMedia";
import NewCustomerNavBar from "./utility/CustomerNavBar";
import { cartActions } from "../../../store";
import { getCart } from "../../services/Internal_API/AccountAPI/Cart/CartAPI";
import { getOrders } from "../../services/Internal_API/AccountAPI/Orders/OrderAPI";

function ProductButtonRender(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dialogContainerStyles = {
    height: "100%",
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    fontSize: "18px",
    justifyContent: "space-evenly",
    alignItems: "center",
  };
  return (
    <>
      {props.value !== "" && (
        <Button
          variant="contained"
          onClick={() => {
            handleOpen();
          }}
        >
          Product Details
        </Button>
      )}
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
          image={props.value.image_url}
          alt={props.value.catagory}
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
          <Grid sx={dialogContainerStyles}>
            <DialogTitle fontSize={30}>Quick Info </DialogTitle>
            <Grid>Handmade item </Grid>
            <Grid>
              Handmade item Dispatches from a small business in United Kingdom
            </Grid>
            <Grid>Materials: copper</Grid>
            <Grid>FREE UK delivery</Grid>
            <DialogActions>
              <Button onClick={handleClose} size="big">
                Close
              </Button>
            </DialogActions>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

function TotalAmountRender(props) {
  return (
    <>
      <div>
        {props.value === undefined &&
          `£${(props.data.quantity * Number(props.data.product.price)).toFixed(
            2
          )}`}
        {props.value !== undefined && props.value}
      </div>
    </>
  );
}

function OrderDetailRender(params) {
  console.log("I am order detail!!");
  console.log(params);
  /**Inspirations so far:
   * https://startfoodbooking.com/wp-content/uploads/2021/03/1-2-2.png
   * Most Likely design --> https://community.magento.com/t5/image/serverpage/image-id/15214i492EBBB8C3839898/image-size/large?v=v2&px=999
   * https://mdbcdn.b-cdn.net/docs/standard/extended/order-details/assets/featured.png
   */
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const total_order_amount = params.data.order.reduce(
    (initialValue, currentOrderItem) => {
      const currentTotalPrice = Number(
        (
          Number(currentOrderItem.product.price) * currentOrderItem.quantity
        ).toFixed(2)
      );
      return initialValue + currentTotalPrice;
    },
    0
  );
  console.log(total_order_amount);
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          handleOpen();
        }}
      >
        Order details
      </Button>
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
            borderRadius: "20px",
            justifyContent: "center",
            alignItems: "center",
            background: "#e7f5ff",
          },
        }}
      >
        <DialogContent
          sx={{
            height: "90%",
            lineHeight: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container sx={{ width: "100%" }}>
            <Grid container flexDirection="Column" textAlign="center">
              <Grid>AmeyShopUk</Grid>
              <Grid>Thank you for ordering!</Grid>
            </Grid>
            <Grid
              container
              flexDirection="column"
              width="50%"
              marginBottom="1rem"
            >
              <Grid item>Personal Information</Grid>
              <Grid item>
                {`${params.data.personal_info_used.first_name} ${params.data.personal_info_used.last_name}`}
              </Grid>
              <Grid item>{params.data.personal_info_used.email}</Grid>
              <Grid item>{params.data.personal_info_used.phone_number}</Grid>
            </Grid>
            <Grid
              container
              flexDirection="column"
              width="50%"
              textAlign="end"
              height="30%"
              marginBottom="1rem"
            >
              <Grid item>Delivery Information</Grid>
              <Grid item>
                {params.data.personal_info_used.address.replace("#", "")}
              </Grid>
              <Grid item>{params.data.personal_info_used.city}</Grid>
              <Grid item>{params.data.personal_info_used.post_code}</Grid>
            </Grid>
            <Grid container flexDirection="column">
              <Grid container width="space-between" marginBottom="1rem">
                <Grid container flexDirection="column" width="50%">
                  <Grid item>Payment Method</Grid>
                  <Grid item>Paypal</Grid>
                </Grid>
                <Grid
                  container
                  flexDirection="column"
                  width="50%"
                  textAlign="end"
                >
                  <Grid item>Delivery Type</Grid>
                  <Grid item>
                    {params.data.personal_info_used.delivery_type}
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid container flexDirection="column">
                  <Grid
                    container
                    justifyContent="space-between"
                    textAlign="end"
                  >
                    <Grid item flex="1" textAlign="start">
                      Items
                    </Grid>
                    <Grid item flex="1">
                      Qty
                    </Grid>
                    <Grid item flex="1">
                      Price
                    </Grid>
                  </Grid>
                  {params.data.order.map((productOrdered) => {
                    return (
                      <Grid
                        container
                        justifyContent="space-between"
                        textAlign="end"
                      >
                        <Grid item flex="1" textAlign="start">
                          Handmade {productOrdered.product.name}
                        </Grid>
                        <Grid item flex="1">
                          {productOrdered.quantity}
                        </Grid>
                        <Grid item flex="1">
                          £
                          {(
                            productOrdered.quantity *
                            productOrdered.product.price
                          ).toFixed(2)}
                        </Grid>
                      </Grid>
                    );
                  })}
                  <Grid
                    container
                    justifyContent="space-between"
                    textAlign="end"
                  >
                    <Grid item flex="1" textAlign="start"></Grid>
                    <Grid item flex="1">
                      Total Amount:
                    </Grid>
                    <Grid item flex="1">
                      £{total_order_amount}
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justifyContent="center"
                    textAlign="Center"
                    marginTop="2rem"
                  >
                    Your Delivery Instructions!
                  </Grid>
                  <Grid container justifyContent="center">
                    {params.data.delivery_instructions}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

function CustomerAccount() {
  // inspiration
  // https://woocommerce.com/wp-content/uploads/2020/11/my-account-page-order-again.jpg
  const [navValue, setNavValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

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
  const [rowData, setRowData] = useState();

  const gridRef = useRef();

  const [columnDefs, setColumnDefs] = useState([
    { field: "cart_item_id", headerName: "Cart item id" },
    { field: "product", cellRenderer: ProductButtonRender },
    { field: "quantity" },
    { field: "total price", cellRenderer: TotalAmountRender },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
  }));

  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  if (navValue == 0 && columnDefs[0].field !== "cart_item_id") {
    setColumnDefs([
      { field: "cart_item_id", headerName: "Cart item id" },
      { field: "product", cellRenderer: ProductButtonRender },
      { field: "quantity" },
      { field: "total price", cellRenderer: TotalAmountRender },
    ]);
    getCart(setIsLoading).then((userCart) => {
      const total_cart_amount = userCart.reduce(
        (initialValue, currentCartItem) => {
          const currentTotalPrice = Number(
            (
              Number(currentCartItem.product.price) * currentCartItem.quantity
            ).toFixed(2)
          );
          return initialValue + currentTotalPrice;
        },
        0
      );
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
    setColumnDefs([
      { field: "id", headerName: "Order id" },
      { field: "order detail", cellRenderer: OrderDetailRender },
      {
        field: "date_ordered",
        headerName: "Date Ordered",
      },
      { field: "delivery_status", headerName: "Delivery Status" },
    ]);
    getOrders(setIsLoading).then((orders) => {
      setRowData([...orders]);
    });
  }

  useEffect(() => {
    getCart(setIsLoading).then((userCart) => {
      const total_cart_amount = userCart.reduce(
        (initialValue, currentCartItem) => {
          const currentTotalPrice = Number(
            (
              Number(currentCartItem.product.price) * currentCartItem.quantity
            ).toFixed(2)
          );
          return initialValue + currentTotalPrice;
        },
        0
      );
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
