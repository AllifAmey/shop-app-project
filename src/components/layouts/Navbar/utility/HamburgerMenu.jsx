import { forwardRef } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryMobileLinks from "./PrimaryMobileLinks";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function HamburgerMenu(props) {
  // The hambuger menu icon that , upon clicked, will display a bunch of links
  // this is for mobile/tablet only.
  return (
    <>
      <IconButton
        size="large"
        aria-label="hamburger menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={props.handleMobileOpen}
        color="inherit"
        data-cy="Hamburger"
      >
        <MenuIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={props.openMobile}
        onClose={props.handleMobileClose}
        TransitionComponent={Transition}
      >
        <IconButton
          edge="start"
          color="inherit"
          onClick={props.handleMobileClose}
          aria-label="close"
          data-cy="Close"
        >
          <CloseIcon />
        </IconButton>
        <PrimaryMobileLinks handleMobileClose={props.handleMobileClose} />
      </Dialog>
    </>
  );
}

export default HamburgerMenu;
