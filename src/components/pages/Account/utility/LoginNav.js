import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// apis
import { getCart } from "../../../services/Internal_API/AccountAPI/Cart/CartAPI";
import { getOrders } from "../../../services/Internal_API/AccountAPI/Orders/OrderAPI";

/*
getCart(setIsLoading).then((user_cart) => {
      setIsLoading(true);
      let user_cart_list = [];
      let user_cart_row = [];
      for (const [key, value] of Object.entries(user_cart)) {
        const card_id = key.slice(key.lastIndexOf(" ") + 1, key.length);
        const cardName = `card${card_id}`;
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
*/

function LoginNav(props) {
  function changeRow(navValue) {
    if (navValue == 0) {
      getCart(props.setIsLoading).then((user_cart) => {
        props.setIsLoading(true);
        let user_cart_list = [];
        let user_cart_row = [];
        for (const [key, value] of Object.entries(user_cart)) {
          const card_id = key.slice(key.lastIndexOf(" ") + 1, key.length);
          const cardName = `card${card_id}`;
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

        props.setrowValue(user_cart_row);
        props.setIsLoading(false);
      });
    } else if (navValue == 1) {
      props.setIsLoading(true);
      getOrders(props.setIsLoading).then((user_order) => {
        let user_order_row = [];
        let user_order_rowDetail = [];
        user_order.forEach((order) => {
          user_order_row.push({
            id: order.id,
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
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={props.navValue}
        onChange={(event, newValue) => {
          changeRow(newValue);
          props.setNavValue(newValue);
        }}
      >
        <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction label="Orders" icon={<LocalShippingIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default LoginNav;
