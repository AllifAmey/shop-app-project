import { Grid } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { SvgIcon } from "@mui/material";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function NavBar() {
  // https://codesandbox.io/s/6ncow?file=/src/App.tsx investigate whether this is the inspiration.
  // solution is to put the cart into a props or to use another component to filter that shit.

  const cart = useSelector((state) => state.cart.cart);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // styles
  const linkStyles = {
    display: "flex",
  };
  const gridLinkStyles = {
    "&:hover": {
      backgroundColor: "#f1f3f5",
      boxShadow: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
    },
    color: "#343a40",
    height: "100%",
    display: "flex",
    borderRadius: "0.2rem",
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

  function cartNum() {
    let itemNum = 0;

    if (cart.length == 0) {
      return 0;
    }

    cart.forEach((element) => {
      itemNum += element.quantity;
    });
    return itemNum;
  }

  function subtotalNum(total = false) {
    let itemNum = 0;

    if (cart.length == 0) {
      return 0;
    }

    cart.forEach((element) => {
      itemNum += element.price;
    });
    if (total == false) {
      return itemNum.toFixed(2);
    }
    return (itemNum + 2).toFixed(2);
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
          <Grid item xs={7} sx={{ textAlign: "start" }}>
            Amey Jewellery
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
            <Link
              underline="none"
              color="#343a40"
              component={RouterLink}
              to="/account/login"
              sx={linkStyles}
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
                    d="M110 250 c-11 -11 -20 -31 -20 -45 0 -30 32 -65 60 -65 28 0 60 35
60 65 0 30 -32 65 -60 65 -11 0 -29 -9 -40 -20z"
                  />
                  <path
                    d="M80 92 c-19 -9 -36 -25 -38 -34 -3 -16 7 -18 108 -18 101 0 111 2
108 18 -4 23 -64 52 -108 52 -19 0 -51 -8 -70 -18z"
                  />
                </g>
              </SvgIcon>
            </Link>
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
                onClick={() => setIsDrawerOpen(true)}
                sx={linkStyles}
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
          </Grid>
        </Grid>
      </Box>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 400 },
        }}
      >
        <Box sx={{ height: "80%", overflowY: "scroll" }}>
          <Container sx={{}}>
            <Grid container direction="column">
              {cart.map((item) => {
                return (
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ height: "5rem" }}
                    key={item.name}
                  >
                    <Box
                      component="img"
                      src={item.img}
                      sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "30%",
                      }}
                    ></Box>
                    <Grid
                      container
                      direction="column"
                      sx={{ width: "40%" }}
                      gap={2}
                    >
                      <Grid item>
                        Handmade
                        {" " +
                          item.type.charAt(0).toUpperCase() +
                          item.type.substring(1)}
                      </Grid>
                      <Grid item>Quantity: {item.quantity}</Grid>
                    </Grid>
                    <Grid item>{item.price.toFixed(2)}</Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
        <Box sx={{ height: "25%" }}>
          <Container sx={{ padding: "1rem" }}>
            <Grid
              container
              direction="column"
              justifyContent="space-evenly"
              alignItems="center"
              gap={1}
            >
              <Grid container direction="row" justifyContent="space-between">
                <Grid item>Subtotal</Grid>
                <Grid item>
                  {subtotalNum() == 0 ? "" : `£ ${subtotalNum()}`}
                </Grid>
              </Grid>
              <Grid container direction="row" justifyContent="space-between">
                <Grid item>Delivery fee</Grid>
                <Grid item>{cart.length == 0 ? "" : "£2.00"}</Grid>
              </Grid>
              <Grid container direction="row" justifyContent="space-between">
                <Grid item>Total to pay</Grid>
                <Grid item>
                  {subtotalNum() == 0 ? "" : `£ ${subtotalNum(true)}`}
                </Grid>
              </Grid>
              {subtotalNum() == 0 ? (
                ""
              ) : (
                <Grid container direction="row" justifyContent="center">
                  <Button
                    variant="contained"
                    size="small"
                    component={RouterLink}
                    to="/checkout"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Checkout
                  </Button>
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
      </Drawer>
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

            width: "5rem",
          },
          ".MuiMenu-root": {},
          "& 	.MuiMenu-list": {},
        }}
      >
        <MenuItem
          component={RouterLink}
          to="/support/faq"
          sx={{ fontSize: "0.8rem" }}
        >
          FAQ
        </MenuItem>
        <MenuItem
          component={RouterLink}
          to="/support/contact"
          sx={{ fontSize: "0.8rem", whiteSpace: "normal" }}
        >
          Contact Us
        </MenuItem>
      </Menu>
    </>
  );
}

export default NavBar;
