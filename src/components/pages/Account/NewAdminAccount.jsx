import React, { useState, useEffect, useRef, useMemo } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import { cartActions } from "../../../store";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { getProducts } from "../../services/Internal_API/ShopAPI/Products/ProductsAPI";
import {
  getOrders,
  patchOrders,
} from "../../services/Internal_API/AccountAPI/Orders/OrderAPI";

function DispatchedRender(props) {
  let checked = null;
  if (props.data.delivery_status === "Dispatched") {
    checked = true;
  } else if (props.data.delivery_status === "Processing Order") {
    checked = false;
  }
  return (
    <>
      <Checkbox
        checked={checked}
        onChange={(event) => {
          const current_index = props.rowData.indexOf(props.data);
          if (event.target.checked) {
            props.rowData[current_index].delivery_status = "Dispatched";
          } else {
            props.rowData[current_index].delivery_status = "Processing Order";
          }
          const data_to_update = props.rowData[current_index];
          const list_order = data_to_update.order.map((order) => {
            return order.order_item_id;
          });
          const patch_id = data_to_update.id;
          // potential error, check this out later.
          const patchData = {
            user: data_to_update.user,
            email: data_to_update.email,
            order: list_order,
            date_ordered: data_to_update.date_ordered,
            personal_info_used: data_to_update.personal_info_used.id,
            delivery_instructions: data_to_update.delivery_instructions,
            delivery_status: data_to_update.delivery_status,
            total_price: data_to_update.total_price,
          };
          patchOrders(props.setIsLoading, patch_id, patchData).then((data) => {
            if (data == "error") {
              console.log("There is an error");
            } else {
              props.setRowData([...props.rowData]);
            }
          });
        }}
      />
    </>
  );
}

function UrgencyLevelRender(params) {
  const date1 = new Date(params.data.date_ordered);
  const date2 = Date.now();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let color = "";
  if (diffDays > 7) {
    color = "red";
  } else {
    color = "green";
  }

  return (
    <>
      <Grid>
        <Grid item color={color}>
          {diffDays}days ago!
        </Grid>
      </Grid>
    </>
  );
}

function ItemsOrderedRender(params) {
  // renders item ordered on the admin page

  const [open, setOpen] = useState(false);
  const [openPic, setOpenPic] = useState(false);
  const [storePic, setStorePic] = useState("");
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
  const headingSize = { fontSize: "20px" };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        View Items
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
            borderRadius: "20px",
          },
        }}
      >
        <DialogContent
          sx={{
            lineHeight: "1.5rem",
            padding: "1rem",
          }}
        >
          <Grid container sx={{}}>
            <Grid container flexDirection="Column" textAlign="center">
              <Grid sx={headingSize}>Products ordered</Grid>
            </Grid>
            <Grid
              container
              flexDirection="column"
              width="50%"
              marginBottom="1rem"
            >
              <Grid item sx={headingSize}>
                Personal Information
              </Grid>
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
              <Grid item sx={headingSize}>
                Address
              </Grid>
              <Grid item>
                {params.data.personal_info_used.address.replace("#", "")}
              </Grid>
              <Grid item>{params.data.personal_info_used.city}</Grid>
              <Grid item>{params.data.personal_info_used.post_code}</Grid>
            </Grid>
            <Grid container flexDirection="column">
              <Grid container width="space-between" marginBottom="1rem">
                <Grid container flexDirection="column" width="50%">
                  <Grid item sx={headingSize}>
                    Payment Method
                  </Grid>
                  <Grid item>Paypal</Grid>
                </Grid>
                <Grid
                  container
                  flexDirection="column"
                  width="50%"
                  textAlign="end"
                >
                  <Grid item sx={headingSize}>
                    Delivery Type
                  </Grid>
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
                    <Grid item flex="1" textAlign="start" sx={headingSize}>
                      Picture
                    </Grid>
                    <Grid item flex="1" textAlign="start" sx={headingSize}>
                      Items
                    </Grid>
                    <Grid item flex="1" sx={headingSize}>
                      Quantity
                    </Grid>
                    <Grid item flex="1" sx={headingSize}>
                      Price
                    </Grid>
                  </Grid>
                  {params.data.order.map((productOrdered) => {
                    return (
                      <Grid
                        container
                        justifyContent="space-between"
                        textAlign="end"
                        gap="1rem"
                      >
                        <img
                          src={productOrdered.product.image_url}
                          loading="lazy"
                          style={{
                            height: "100px",
                            width: "100px",
                            borderRadius: "10px",
                          }}
                          onClick={() => {
                            setStorePic(productOrdered.product.image_url);
                            setOpenPic(true);
                          }}
                        ></img>
                        <Grid item flex="1" textAlign="center">
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
                    sx={headingSize}
                  >
                    Delivery Instructions:
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
      <Dialog
        open={openPic}
        onClose={() => {
          setOpenPic(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            height: "80vh",
            borderRadius: "20px",
          },
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={storePic}
            alt="product picture"
            style={{
              height: "90%",
              maxWidth: "100%",
              objectFit: "fill",
              background: "no-repeat center center/cover",
              borderRadius: "20px",
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

function VerticalTabs(props) {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([
    { field: "cart_item_id", headerName: "Cart item id" },
    { field: "product" },
    { field: "quantity" },
    { field: "total price" },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // it is here where I do the logic for ag grid react.
    if (newValue == 1) {
      getProducts(setIsLoading).then((productsData) => {
        setColumnDefs([
          { field: "id", headerName: "Product Id" },
          { field: "Details", cellRenderer: ProductDetailRender },
          { field: "Edit", cellRenderer: ProductEditRender },
          { field: "Delete", cellRenderer: ProductDeleteRender },
        ]);
        setRowData(productsData);
      });
    } else if (newValue == 3) {
      getOrders(setIsLoading).then((orderData) => {
        setRowData(orderData);
        setColumnDefs([
          { field: "id", headerName: "Order id" },
          { field: "Items ordered", cellRenderer: ItemsOrderedRender },
          { field: "Urgency level", cellRenderer: UrgencyLevelRender },
          { field: "delivery_status", headerName: "Delivery Status" },
          {
            field: "Dispatched?",
            cellRenderer: DispatchedRender,
            cellRendererParams: {
              setRowData: setRowData,
              setIsLoading: setIsLoading,
              rowData: orderData,
            },
          },
        ]);
      });
    }
  };

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    flex: 1,
  }));

  const gridRef = useRef();

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
        height: "80vh",
        width: "80vw",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        textColor="secondary"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderColor: "divider",
          height: "80vh",
          width: "12%",
        }}
      >
        <Tab
          label="DashBoard"
          icon={<i className="fa-solid fa-chart-line"></i>}
          iconPosition="end"
        />
        <Tab
          label="Products"
          sx={{ justifyContent: "space-evenly" }}
          icon={<i className="fa-sharp fa-solid fa-gem"></i>}
          iconPosition="end"
        />
        <Tab
          label="Add Product"
          icon={<i className="fa-solid fa-basket-shopping"></i>}
          iconPosition="end"
        />
        <Tab
          label="Orders"
          sx={{ justifyContent: "space-evenly" }}
          icon={<i className="fa-sharp fa-solid fa-truck"></i>}
          iconPosition="end"
        />
        <Tab
          label="Refunds sent"
          sx={{ justifyContent: "space-evenly" }}
          icon={<i className="fa-solid fa-money-bill-wave"></i>}
          iconPosition="end"
        />
        <Tab
          label="Logout"
          onClick={() => {
            props.logOut();
            console.log("hello");
          }}
          icon={<i className="fa-solid fa-right-from-bracket"></i>}
          iconPosition="end"
        />
      </Tabs>
      {value == 0 && (
        <Box>
          <Tabs
            value={value}
            textColor="secondary"
            aria-label="Vertical tabs example"
            sx={{
              borderColor: "divider",
              height: "20px",
            }}
          >
            <Tab label="Sales per month" />
            <Tab label="Most popular" />
          </Tabs>
        </Box>
      )}
      {value == 1 && (
        <div className="ag-theme-material" style={{ flex: 1, height: "100%" }}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              animateRows={true}
              rowSelection="multiple"
              defaultColDef={defaultColDef}
            />
          )}
        </div>
      )}
      {value == 2 && <p></p>}
      {value == 3 && (
        <div className="ag-theme-material" style={{ flex: 1, height: "100%" }}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              animateRows={true}
              rowSelection="multiple"
              defaultColDef={defaultColDef}
            />
          )}
        </div>
      )}
    </Box>
  );
}

function NewAdminAccount(props) {
  // inspiration
  // https://woocommerce.com/wp-content/uploads/2020/11/my-account-page-order-again.jpg
  const [navValue, setNavValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  function logOut() {
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
              <VerticalTabs logOut={logOut} />
              <Grid
                item
                container
                justifyContent="space-evenly"
                height={0.2}
                width={0.5}
              ></Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
}

export default NewAdminAccount;
