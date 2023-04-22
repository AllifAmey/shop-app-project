import React, { useState } from "react";
import { Grid } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import AccountIcon from "./utility/AccountIcon";
import CartIcon from "./utility/CartIcon";
import CartSidePopup from "./utility/CartSidePopup";
import SupportMenu from "./utility/SupportMenu";

function NavBar() {
  /*
  docs:
  Logic for layout- 
  The layout is based on flexbox.

   */
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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

  function handleClick(event) {
    // MenuListProps={{ onMouseLeave: handleClose }} is key to understanding.
    // when the mouse leaves the menu then execute this code and turn it to false.
    // this in turn will close the menu as the menu is reliant on open={Boolean(anchorEl)}

    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

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
      <SupportMenu anchorEl={anchorEl} handleClose={handleClose} />
    </>
  );
}

export default NavBar;
