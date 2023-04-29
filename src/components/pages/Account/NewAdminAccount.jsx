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
import { cartActions } from "../../../store";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function VerticalTabs(props) {
  const [value, setValue] = useState(0);
  const [rawData, setRawData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([
    { field: "cart_item_id", headerName: "Cart item id" },
    { field: "product" },
    { field: "quantity" },
    { field: "total price" },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // it is here where I do the logic for ag grid react.
  };

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
  }));

  const tabStyles = {
    margin: "0px",
    height: "100%",
    width: "100%",
    backgroundColor: "yellow",
    flex: 1,
  };
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
          icon={<i class="fa-sharp fa-solid fa-gem"></i>}
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
          icon={<i class="fa-sharp fa-solid fa-truck"></i>}
          iconPosition="end"
        />
        <Tab
          label="Refunds sent"
          sx={{ justifyContent: "space-evenly" }}
          icon={<i class="fa-solid fa-money-bill-wave"></i>}
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
          <AgGridReact
            ref={gridRef}
            rowData={rawData}
            columnDefs={columnDefs}
            animateRows={true}
            rowSelection="multiple"
            defaultColDef={defaultColDef}
          />
        </div>
      )}
      {value == 2 && <p></p>}
      {value == 3 && (
        <div className="ag-theme-material" style={{ flex: 1, height: "100%" }}>
          <AgGridReact
            ref={gridRef}
            rowData={rawData}
            columnDefs={columnDefs}
            animateRows={true}
            rowSelection="multiple"
            defaultColDef={defaultColDef}
          />
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
