import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { SvgIcon } from "@mui/material";
import Link from "@mui/material/Link";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";

function CartIcon(props) {
  /*
  docs:
    The cart's redux data is grabbed and then number is calculated.
    The reason why cartNum() doesn't run multiple times is that ,
    redux rerenders the components that use redux and if redux changes,
    then the component relying on redux will rerender.
    This means the component does not rerender multiple times thereby,
    calling function multiple times if redux does not change multiple times.
  */

  const cart = useSelector((state) => state.cart.cart);

  function cartNum() {
    // The number in the cart icon is calculated based on the
    // quantity property of the product object.
    let itemNum = 0;

    if (cart.length == 0) {
      return 0;
    }
    cart.forEach((product) => {
      // each product object has a property called quantity.
      // this is a actual number and added to the itemNum
      // which is then returned to produce the number on the icon.
      itemNum += product.quantity;
    });
    return itemNum;
  }

  return (
    <Badge
      badgeContent={cartNum()}
      color="primary"
      sx={{
        "& .MuiBadge-badge": {
          color: "white",
          backgroundColor: "blue",
        },
      }}
    >
      <Link
        underline="none"
        color="#343a40"
        component={RouterLink}
        onClick={() => {
          props.setDrawerOpen(true);
        }}
        display="flex"
      >
        <SvgIcon
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="20.000000pt"
          height="20.000000pt"
          viewBox="0 0 30.000000 30.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M10 271 c0 -5 7 -11 16 -13 11 -2 26 -31 43 -83 l26 -80 73 -3 73 -3
13 33 c8 18 17 48 21 66 l7 32 -106 0 c-95 0 -106 2 -106 18 0 10 -5 23 -12
30 -14 14 -48 16 -48 3z m208 -113 c-3 -20 -9 -23 -48 -23 -39 0 -45 3 -48 23
-3 20 0 22 48 22 48 0 51 -2 48 -22z"
            />
            <path
              d="M104 59 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"
            />
            <path
              d="M204 59 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"
            />
          </g>
        </SvgIcon>
      </Link>
    </Badge>
  );
}

export default CartIcon;
