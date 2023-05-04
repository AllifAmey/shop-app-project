import React, { useState, useEffect, useRef, useMemo } from "react";
import Container from "@mui/material/Container";
import { Grid, Input } from "@mui/material";
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
import { getProducts } from "../../services/Internal_API/ShopAPI/Products/ProductsAPI";
import { getOrders } from "../../services/Internal_API/AccountAPI/Orders/OrderAPI";
import { getShopAnalysis } from "../../services/Internal_API/ShopAPI/Analysis/AnalysisAPI";

// utility
import SalesChart from "./utility/Admin/SalesChart";
import ProductDetailRender from "./utility/Admin/ProductDetailRender";
import ProductEditRender from "./utility/Admin/ProductEditRender";
import ProductDeleteRender from "./utility/Admin/ProductDeleteRender";
import ItemsOrderedRender from "./utility/Admin/ItemsOrderedRender";
import UrgencyLevelRender from "./utility/Admin/UrgencyLevelRender";
import DispatchedRender from "./utility/Admin/DispatchedRender";
import AddProductForm from "./utility/Admin/AddProductForm";

function VerticalTabs(props) {
  const [value, setValue] = useState(0);
  const [innerValueTab, setInnerValueTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [analysisData, setAnalysisData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([
    { field: "cart_item_id", headerName: "Cart item id" },
    { field: "product" },
    { field: "quantity" },
    { field: "total price" },
  ]);

  const handleInnerTabChange = (event, newValue) => {
    setInnerValueTab(newValue);
  };

  useEffect(() => {
    getShopAnalysis(setIsLoading).then((data) => {
      setAnalysisData(data);
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // it is here where I do the logic for ag grid react.
    if (newValue == 0) {
      getShopAnalysis(setIsLoading).then((data) => {
        setAnalysisData(data);
      });
    }
    if (newValue == 1) {
      getProducts(setIsLoading).then((productsData) => {
        setColumnDefs([
          { field: "id", headerName: "Product Id" },
          { field: "Details", cellRenderer: ProductDetailRender },
          { field: "Edit", cellRenderer: ProductEditRender },
          {
            field: "Delete",
            cellRenderer: ProductDeleteRender,
            cellRendererParams: {
              setRowData: setRowData,
              setIsLoading: setIsLoading,
              rowData: productsData,
            },
          },
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
        <Box flex={1}>
          <Tabs
            value={innerValueTab}
            textColor="primary"
            aria-label="Vertical tabs example"
            onChange={handleInnerTabChange}
            sx={{
              borderColor: "divider",
              height: "20px",
            }}
          >
            <Tab label="Sales per month" />
            <Tab label="Most popular" />
          </Tabs>
          {innerValueTab == 0 && <SalesChart analysisData={analysisData} />}
          {innerValueTab == 1 && (
            <Grid
              container
              height={0.92}
              width={1}
              flex={1}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                container
                width={0.8}
                height={0.8}
                textAlign="center"
                justifyContent="center"
                alignItems="center"
              >
                <Grid
                  container
                  flexDirection="column"
                  xs
                  justifyContent="space-evenly"
                  height={1}
                >
                  <Grid item fontSize="30px">
                    Most popular product
                  </Grid>
                  <Grid item fontSize="24px" fontStyle="italic">
                    Handmade{" "}
                    {analysisData.popularity_metric[0].most_popular.name}
                  </Grid>
                  <Grid item>
                    <img
                      src={
                        analysisData.popularity_metric[0].most_popular.image_url
                      }
                      alt={analysisData.popularity_metric[0].most_popular.name}
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "20px",
                      }}
                    />
                  </Grid>
                  <Grid item fontSize="24px">
                    How many bought so far
                  </Grid>
                  <Grid item fontSize="20px">
                    {analysisData.popularity_metric[0].occurance}
                  </Grid>
                </Grid>
                <Grid
                  container
                  flexDirection="column"
                  xs
                  justifyContent="space-evenly"
                  height={1}
                >
                  <Grid item fontSize="30px">
                    Least popular product
                  </Grid>
                  <Grid item fontSize="24px" fontStyle="italic">
                    Handmade{" "}
                    {analysisData.popularity_metric[1].least_popular.name}
                  </Grid>
                  <Grid item>
                    <img
                      src={
                        analysisData.popularity_metric[1].least_popular
                          .image_url
                      }
                      alt={analysisData.popularity_metric[1].least_popular.name}
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "20px",
                      }}
                    />
                  </Grid>
                  <Grid item fontSize="24px">
                    How many bought so far
                  </Grid>
                  <Grid item fontSize="20px">
                    {analysisData.popularity_metric[1].occurance}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
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
      {value == 2 && <AddProductForm />}
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

function AdminAccountPage(props) {
  // inspiration
  // https://woocommerce.com/wp-content/uploads/2020/11/my-account-page-order-again.jpg
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    </>
  );
}

export default AdminAccountPage;
