import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// apis
import { getProducts } from "../../../services/Internal_API/ShopAPI/Products/ProductsAPI";
import { getOrders } from "../../../services/Internal_API/AccountAPI/Orders/OrderAPI";

function AdminDataGridnNavbar(props) {
  /*
  Even though the component is called BottomNavigation,
  this is actually the mini navbar for admin sitting above the datagrid.

  The Navbar for customers includes two values 0 and 1, corresponding to
  "Products" and "Orders" respectively. 

  https://mui.com/material-ui/react-bottom-navigation/ for reference.


  */

  function changeRow(navValue) {
    if (navValue == 0) {
      // products
      // get the products
      // then display the necessary information

      getProducts(props.setIsLoading).then((products) => {
        props.setIsLoading(true);

        let user_product_row = [];
        products.forEach((product) => {
          user_product_row.push({
            id: product.id,
            product_name: product.name,
            price: product.price,
            catagory: product.catagory,
          });
        });

        props.setrowValue(user_product_row);
        props.setIsLoading(false);
      });
    } else if (navValue == 1) {
      // get the orders currently in the database
      // then display all of the information to get a clear picture.
      getOrders(props.setIsLoading).then((user_order) => {
        // will be in the form of a list of objects.
        // in that there will be
        let user_order_row = [];
        let user_order_rowDetail = [];
        user_order.forEach((order) => {
          user_order_row.push({
            id: order.id,
            username: order.user,
            email: order.email,
            view: "Click me!",
            totalPrice: order.total_price,
            deliveryStatus: order.delivery_status,
          });
          user_order_rowDetail.push(order);
        });
        props.setrowValue(user_order_row);
        props.setRowDetail(user_order_rowDetail);
        props.setIsLoading(false);
      });
    }
  }

  return (
    <Box sx={{ width: 800 }}>
      <BottomNavigation
        showLabels
        value={props.navValue}
        onChange={(event, newValue) => {
          changeRow(newValue);
          props.setNavValue(newValue);
        }}
      >
        <BottomNavigationAction label="Products" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction label="Orders" icon={<LocalShippingIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default AdminDataGridnNavbar;
