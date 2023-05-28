import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountIcon from "./utility/AccountIcon";
import CartIcon from "./utility/CartIcon";
import CartSidePopup from "./utility/CartSidePopup";
import SupportMenu from "./utility/SupportMenu";
import HamburgerMenu from "./utility/HamburgerMenu";

function NavBarTablet(props) {
  /*
  docs:
  Logic for layout- 
  The layout is based on flexbox.


   */
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMobile, setOpenMobile] = useState(false);

  const handleMobileOpen = () => {
    setOpenMobile(true);
  };

  const handleMobileClose = () => {
    setOpenMobile(false);
  };

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
            SahrahJewellery
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

          <Grid item sx={1}>
            <HamburgerMenu
              handleMobileOpen={handleMobileOpen}
              openMobile={openMobile}
              handleMobileClose={handleMobileClose}
            />
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

export default NavBarTablet;
