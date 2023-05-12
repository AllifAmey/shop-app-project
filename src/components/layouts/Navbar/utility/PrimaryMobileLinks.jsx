import { Grid } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

function PrimaryMobileLinks(props) {
  /*
    docs:
    Links for mobile.
    */

  // styles
  const gridLinkStyles = {
    "&:hover": {
      backgroundColor: "#f1f3f5",
      boxShadow: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
    },
    color: "#343a40",
    height: "10vh",
    display: "flex",
    borderRadius: "0.2rem",
    fontSize: "24px",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  };
  const isActiveStyle = {
    color: "#4dabf7",
    backgroundColor: "#dee2e6",
    boxShadow: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
  };
  return (
    <>
      <Grid
        item
        sx={gridLinkStyles}
        component={RouterLink}
        to="/home"
        onClick={() => {
          handleMobileClose();
        }}
        style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
      >
        Home
      </Grid>
      <Grid
        item
        sx={gridLinkStyles}
        component={RouterLink}
        to="/shop"
        onClick={() => {
          handleMobileClose();
        }}
        style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
      >
        Shop
      </Grid>
      <Grid
        item
        sx={gridLinkStyles}
        component={RouterLink}
        to="/story"
        onClick={() => {
          handleMobileClose();
        }}
        style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
      >
        Our Story
      </Grid>
      <Grid
        item
        sx={gridLinkStyles}
        component={RouterLink}
        to="/support/faq"
        onClick={() => {
          handleMobileClose();
        }}
        style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
      >
        FAQ
      </Grid>
      <Grid
        item
        sx={gridLinkStyles}
        component={RouterLink}
        to="/support/contact"
        onClick={() => {
          handleMobileClose();
        }}
        style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
      >
        Contact us
      </Grid>
    </>
  );
}

export default PrimaryMobileLinks;
