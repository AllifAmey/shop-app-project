import { Grid } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState, useEffect } from "react";

import AccountIcon from "./utility/AccountIcon";
import CartIcon from "./utility/CartIcon";
import CartSidePopup from "./CartSidePopup";

function NavBar() {
  // https://codesandbox.io/s/6ncow?file=/src/App.tsx investigate whether this is the inspiration.
  // solution is to put the cart into a props or to use another component to filter that stuff.
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // styles

  const gridLinkStyles = {
    "&:hover": {
      backgroundColor: "#f1f3f5",
      boxShadow: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
    },
    color: "#343a40",
    height: "100%",
    display: "flex",
    borderRadius: "0.2rem",
    fontSize: "24px",
  };

  const gridLinkIcons = {
    height: "100%",
    display: "flex",
    gap: "1rem",
  };
  const outerBoxStyles = {
    display: "flex",
    width: "100%",
    height: "10vh",
    justifyContent: "center",
    alignItems: "center",
  };

  const gridStyle = {
    width: "90%",
    height: "100%",
    marginLeft: "5%",
    textAlign: "center",
  };

  const isActiveStyle = {
    color: "#4dabf7",
    backgroundColor: "#dee2e6",
    boxShadow: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
  };

  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  useEffect(() => {
    // let cart = localStorage.getItem("Cart");
  }, []);

  return (
    <>
      <Box sx={outerBoxStyles}>
        <Grid
          container
          sx={gridStyle}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={7}
            sx={{ textAlign: "start", fontSize: "30px", color: "red" }}
          >
            AmeyShopUK
          </Grid>
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            sx={gridLinkStyles}
            xs={1}
            component={RouterLink}
            to="/home"
            style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
          >
            Home
          </Grid>
          <Grid
            item
            xs={1}
            justifyContent="center"
            alignItems="center"
            sx={gridLinkStyles}
            component={RouterLink}
            to="/shop"
            style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
          >
            Shop
          </Grid>
          <Grid
            item
            xs={1}
            justifyContent="center"
            alignItems="center"
            sx={gridLinkStyles}
            component={RouterLink}
            to="/story"
            style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
          >
            Our Story
          </Grid>
          <Grid item xs={1}>
            <Link
              color="#343a40"
              underline="none"
              component={RouterLink}
              to="/help"
              onMouseOver={handleClick}
              fontSize={24}
            >
              Support
            </Link>
          </Grid>

          <Grid
            item
            justifyContent="center"
            alignItems="center"
            xs={1}
            sx={gridLinkIcons}
          >
            <AccountIcon />
            <CartIcon setDrawerOpen={setIsDrawerOpen}></CartIcon>
          </Grid>
        </Grid>
      </Box>
      <CartSidePopup
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      ></CartSidePopup>
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& 	.MuiMenu-paper": {
            boxSizing: "border-box",

            width: "6rem",
          },
          ".MuiMenu-root": {},
          "& 	.MuiMenu-list": {},
        }}
      >
        <MenuItem
          component={RouterLink}
          to="/support/faq"
          sx={{ fontSize: "1rem" }}
        >
          FAQ
        </MenuItem>
        <MenuItem
          component={RouterLink}
          to="/support/contact"
          sx={{ fontSize: "1rem", whiteSpace: "normal" }}
        >
          Contact Us
        </MenuItem>
      </Menu>
    </>
  );
}

export default NavBar;
