import { Grid } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

function PrimaryLinks(props) {
  /*
  docs:
  Links for desktop version.
  */
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
  const isActiveStyle = {
    color: "#4dabf7",
    backgroundColor: "#dee2e6",
    boxShadow: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
  };
  return (
    <>
      <Grid
        item
        justifyContent="center"
        alignItems="center"
        sx={gridLinkStyles}
        xs={1}
        component={RouterLink}
        to="/"
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
          onMouseOver={props.handleClick}
          fontSize={24}
        >
          Support
        </Link>
      </Grid>
    </>
  );
}

export default PrimaryLinks;
