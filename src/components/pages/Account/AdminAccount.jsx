import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import { Grid } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import NestedModalOrder from "./utility/NestedModalOrder";
import { massDelete } from "../../services/Internal_API/AccountAPI/utility/MassDeleteAPI";
import { cartActions } from "../../../store";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import AdminDataGridnNavbar from "./utility/AdminDataGridNavbar";

import { getProducts } from "../../services/Internal_API/ShopAPI/Products/ProductsAPI";
import {
  getSpecificOrder,
  patchOrders,
} from "../../services/Internal_API/AccountAPI/Orders/OrderAPI";

function AdminAccount(props) {
  // inspiration
  // https://woocommerce.com/wp-content/uploads/2020/11/my-account-page-order-again.jpg
  const [navValue, setNavValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [rowValue, setrowValue] = useState();
  const [selectedRows, setSelectedRows] = useState([]);
  const [checkOrderId, setCheckOrderId] = useState();
  const [rowOrderDetail, setOrderRowDetail] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "User", width: 70 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "view",
      headerName: "View Order",
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            size="small"
            style={{ marginLeft: 16 }}
            tabIndex={params.hasFocus ? 0 : -1}
            onClick={() => {
              setCheckOrderId(params.id);
              handleOpen(true);
            }}
          >
            Open
          </Button>
        </strong>
      ),
      width: 120,
    },
    {
      field: "totalPrice",
      headerName: "Total Price",
      type: "number",
      width: 100,
    },
    {
      field: "deliveryStatus",
      headerName: "Delivery Status",
      width: 150,
    },
    {
      field: "dispatch",
      headerName: "Dispatched?",
      renderCell: (params) => {
        let checked = undefined;
        if (params.row.deliveryStatus == "Dispatched") {
          checked = true;
        } else {
          checked = false;
        }
        return (
          <strong>
            <Checkbox
              checked={checked}
              onChange={(event) => {
                const order_id = params.id;
                const delivery_status = event.target.checked;

                getSpecificOrder(setIsLoading, order_id).then((order_data) => {
                  patchOrders(
                    setIsLoading,
                    order_id,
                    order_data,
                    delivery_status
                  ).then((data) => {
                    if (!isLoading) {
                      params.row.deliveryStatus = data.delivery_status;
                    }
                  });
                });
              }}
            />
          </strong>
        );
      },
      width: 120,
    },
  ];

  const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product_name",
      headerName: "Product",
      width: 90,
    },
    {
      field: "price",
      headerName: "Price",
      width: 90,
    },
    {
      field: "catagory",
      headerName: "Catagory",
      type: "number",
      width: 150,
    },
    {
      field: "detailed_view",
      headerName: "View details",
      type: "number",
      width: 150,
    },
  ];

  useEffect(() => {
    // grab user's name and place it in the url
    let username = localStorage.getItem("username");
    if (username != undefined) {
      navigate(`/account/${username}/`, { replace: true });
      setrowValue([]);
    }
    getProducts(setIsLoading).then((products) => {
      setIsLoading(true);

      let user_product_row = [];
      products.forEach((product) => {
        user_product_row.push({
          id: product.id,
          product_name: product.name,
          price: product.price,
          catagory: product.catagory,
        });
      });

      setrowValue(user_product_row);
      setIsLoading(false);
    });
  }, []);

  function deleteitems() {
    // Here is the logic:
    // Grab the ids of the selected rows and get rid of them.
    // the ids presented will form the basis of delete method api calls.

    // TODO: I don't know if this is a good idea but add ability to delete product and order..
    //

    const arr_selectedRows = [...selectedRows];
    const old_row = rowValue;
    let new_row = [...rowValue];
    let counter = 0;

    dispatch(cartActions.changeItem(["delete", arr_selectedRows]));
    old_row.forEach((row) => {
      if (arr_selectedRows.includes(row.id)) {
        new_row.splice(counter, 1);
      }
      counter++;
    });
    setrowValue(new_row);
    massDelete(setIsLoading, "cart", arr_selectedRows);
  }

  function logOut() {
    localStorage.removeItem("Token");
    localStorage.removeItem("username");
    localStorage.removeItem("isLogged");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_status");
    props.logOut(false);
  }

  function fetchOrderbyid(order) {
    // As every id is unique, the id is used to return
    // the exact order details to the NestedModalOrder
    // the NestedModalOrder then translates all that data into a UI ,
    // the user understands.
    return order.id == checkOrderId;
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
              <Grid item justifyContent="center">
                Welcome back, {localStorage.getItem("username")}
              </Grid>
              <Grid item container justifyContent="center">
                <AdminDataGridnNavbar
                  setIsLoading={setIsLoading}
                  setrowValue={setrowValue}
                  setNavValue={setNavValue}
                  navValue={navValue}
                  setRowDetail={setOrderRowDetail}
                ></AdminDataGridnNavbar>
              </Grid>
              <Grid item container justifyContent="center" width="75vw">
                <div style={{ height: 400, width: "60%" }}>
                  <DataGrid
                    rows={rowValue}
                    columns={navValue == 0 ? productColumns : orderColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick={true}
                    disableColumnSelector={true}
                    onSelectionModelChange={(ids) => {
                      const selectedIDs = new Set(ids);
                      //console.log(ids);
                      setSelectedRows(selectedIDs);

                      if ([...selectedIDs].length == 0) {
                        setShowDelete(false);
                      } else {
                        setShowDelete(true);
                      }
                    }}
                  />
                </div>
              </Grid>
              <Grid
                item
                container
                justifyContent={showDelete ? "space-between" : "space-evenly"}
                height={0.2}
                width={0.5}
              >
                {showDelete ? (
                  <Button
                    variant="contained"
                    sx={{ color: "red" }}
                    onClick={deleteitems}
                  >
                    Delete items
                  </Button>
                ) : (
                  ""
                )}
                {navValue == 0 ? (
                  <Button
                    variant="contained"
                    component={RouterLink}
                    to="create/product"
                  >
                    Add Product
                  </Button>
                ) : (
                  ""
                )}

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
      {navValue == 1 && (
        <NestedModalOrder
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          rowDetail={open && rowOrderDetail.filter(fetchOrderbyid)}
          checkOrderId={checkOrderId}
        ></NestedModalOrder>
      )}
    </>
  );
}

export default AdminAccount;
