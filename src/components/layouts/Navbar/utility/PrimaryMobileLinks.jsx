import Grid from "@mui/material/Grid";
import { NavLink as RouterLink } from "react-router-dom";

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
    color: "red",
  };
  return (
    <>
      <Grid
        item
        sx={gridLinkStyles}
        component={RouterLink}
        to="/"
        onClick={() => {
          props.handleMobileClose();
        }}
        style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
        data-cy="Home"
      >
        Home
      </Grid>
      <Grid
        item
        sx={gridLinkStyles}
        component={RouterLink}
        to="/shop"
        onClick={() => {
          props.handleMobileClose();
        }}
        style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
        data-cy="Shop"
      >
        Shop
      </Grid>
      <Grid
        item
        sx={gridLinkStyles}
        component={RouterLink}
        to="/story"
        onClick={() => {
          props.handleMobileClose();
        }}
        style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
        data-cy="Story"
      >
        Our Story
      </Grid>
      <Grid
        item
        sx={gridLinkStyles}
        component={RouterLink}
        to="/support/faq"
        onClick={() => {
          props.handleMobileClose();
        }}
        style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
        data-cy="FAQ"
      >
        FAQ
      </Grid>
      <Grid
        item
        sx={gridLinkStyles}
        component={RouterLink}
        to="/support/contact"
        onClick={() => {
          props.handleMobileClose();
        }}
        style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
        data-cy="Contact Us"
      >
        Contact us
      </Grid>
    </>
  );
}

export default PrimaryMobileLinks;
