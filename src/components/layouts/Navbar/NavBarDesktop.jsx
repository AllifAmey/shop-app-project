import { useState } from "react";

// 3rd party components.
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountIcon from "./utility/AccountIcon";
import CartIcon from "./utility/CartIcon";
import CartSidePopup from "./utility/CartSidePopup";
import SupportMenu from "./utility/SupportMenu";
import PrimaryLinks from "./utility/PrimaryLinks";

function NavBarDesktop(props) {
  /*
  docs:
    read Navbar.jsx docs.

   */
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // styles

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
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            item
            flex={1}
            sx={{ textAlign: "start", fontSize: "30px", color: "red" }}
          >
            UniqueShopGB
          </Grid>
          <PrimaryLinks handleClick={handleClick} />
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
        isDesktop={props.isDesktop}
        isTablet={props.isTablet}
        isMobile={props.isMobile}
      ></CartSidePopup>
      <SupportMenu anchorEl={anchorEl} handleClose={handleClose} />
    </>
  );
}

export default NavBarDesktop;
