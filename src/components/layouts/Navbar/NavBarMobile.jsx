import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountIcon from "./utility/AccountIcon";
import CartIcon from "./utility/CartIcon";
import CartSidePopup from "./utility/CartSidePopup";
import HamburgerMenu from "./utility/HamburgerMenu";

function NavBar(props) {
  /*
   docs:
    read Navbar.jsx docs.


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

  const outerBoxStyles = {
    width: "100%",
    height: "10vh",
  };

  return (
    <>
      <Box sx={outerBoxStyles}>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          height="100%"
        >
          <Grid item sx={{ fontSize: "26px", color: "red" }}>
            SahrahJewellery
          </Grid>
          <Grid item>
            <AccountIcon />
          </Grid>
          <Grid item>
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
        isDesktop={props.isDesktop}
        isTablet={props.isTablet}
        isMobile={props.isMobile}
      ></CartSidePopup>
    </>
  );
}

export default NavBar;
