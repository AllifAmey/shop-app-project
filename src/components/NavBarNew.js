import { Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";

function NavBarNew() {
  const linkStyles = {
    display: "flex",
  };
  const gridLinkStyles = {
    "&:hover": {
      backgroundColor: "#f1f3f5",
      boxShadow: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
    },
    height: "100%",
    display: "flex",
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

  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
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
          <Grid item xs={8} sx={{ textAlign: "start" }}>
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
          >
            <Link
              color="#343a40"
              underline="none"
              component={RouterLink}
              to="/home"
              sx={linkStyles}
            >
              Home
            </Link>
          </Grid>
          <Grid
            item
            xs={1}
            justifyContent="center"
            alignItems="center"
            sx={gridLinkStyles}
            component={RouterLink}
            to="/shop"
          >
            <Link
              color="#343a40"
              underline="none"
              component={RouterLink}
              to="/shop"
              sx={linkStyles}
            >
              Shop
            </Link>
          </Grid>
          <Grid
            item
            xs={1}
            justifyContent="center"
            alignItems="center"
            sx={gridLinkStyles}
            component={RouterLink}
            to="/story"
          >
            <Link
              underline="none"
              color="#343a40"
              component={RouterLink}
              to="/story"
              sx={linkStyles}
            >
              Our Story
            </Link>
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
        </Grid>
      </Box>
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem component={RouterLink} to="/support/faq">
          FAQ
        </MenuItem>
        <MenuItem component={RouterLink} to="/support/contact">
          Contact us
        </MenuItem>
      </Menu>
    </>
  );
}

export default NavBarNew;
