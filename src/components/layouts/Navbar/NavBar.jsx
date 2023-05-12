import { useState, forwardRef } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import AccountIcon from "./utility/AccountIcon";
import CartIcon from "./utility/CartIcon";
import CartSidePopup from "./utility/CartSidePopup";
import SupportMenu from "./utility/SupportMenu";
import PrimaryLinks from "./utility/PrimaryLinks";
import PrimaryMobileLinks from "./utility/PrimaryMobileLinks";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NavBar(props) {
  /*
  docs:
  Logic for layout- 
  The layout is based on flexbox.

  {props.isDesktop && "Desktop"}
  {props.isMobile && "Mobile"}
  {props.isTablet && "Tablet"}

   */
  const [anchorElNav, setAnchorElNav] = useState(null);
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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
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
            SahrahJewellery
          </Grid>
          {props.isDesktop && <PrimaryLinks handleClick={handleClick} />}
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

          {(props.isTablet || props.isMobile) && (
            <>
              <Grid item sx={1}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMobileOpen}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Dialog
                fullScreen
                open={openMobile}
                onClose={handleMobileClose}
                TransitionComponent={Transition}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleMobileClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <PrimaryMobileLinks handleMobileClose={handleMobileClose} />
              </Dialog>
            </>
          )}
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
