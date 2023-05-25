import { useState } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import AccountIcon from "./utility/AccountIcon";
import CartIcon from "./utility/CartIcon";
import CartSidePopup from "./utility/CartSidePopup";
import SupportMenu from "./utility/SupportMenu";
import PrimaryLinks from "./utility/PrimaryLinks";
import HamburgerMenu from "./utility/HamburgerMenu";

function NavBar(props) {
  /*
  docs:
  Logic for layout- 
  The layout is based on flexbox.

  {props.isDesktop && "Desktop"}
  {props.isMobile && "Mobile"}
  {props.isTablet && "Tablet"}

   */
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
  };
  const outerBoxStyles = {
    width: "100%",
    height: "10vh",
  };

  return (
    <>
      <Box sx={outerBoxStyles}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          padding="0 20px"
        >
          <Grid
            item
            sx={{ textAlign: "start", fontSize: "26px", color: "red" }}
          >
            SahrahJewellery
          </Grid>
          <Grid item>
            <AccountIcon />
          </Grid>
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            sx={gridLinkIcons}
          >
            <CartIcon setDrawerOpen={setIsDrawerOpen}></CartIcon>
          </Grid>

          <Grid item>
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
      ></CartSidePopup>
    </>
  );
}

export default NavBar;
