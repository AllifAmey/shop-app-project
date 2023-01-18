import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function SupportMenu(props) {
  /*
  docs:
    Logic for Menu - 
        mouseover is used on the grid item containing the words support
        if the mouse is hovering over support it triggers the handeclick function,
        this results in menu popping up
        Once the menu is popped up the mouse is again tracked and if it leaves the menu,
        ,onMouseLeave, then the handleClose is triggered which sets the anchorEl to null.
        This closes the Menu.
    */
  return (
    <>
      <Menu
        open={Boolean(props.anchorEl)}
        anchorEl={props.anchorEl}
        onClose={props.handleClose}
        MenuListProps={{ onMouseLeave: props.handleClose }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& 	.MuiMenu-paper": {
            boxSizing: "border-box",

            width: "6rem",
          },
          ".MuiMenu-root": {},
          "& 	.MuiMenu-list": {},
        }}
      >
        <MenuItem
          component={RouterLink}
          to="/support/faq"
          sx={{ fontSize: "1rem" }}
        >
          FAQ
        </MenuItem>
        <MenuItem
          component={RouterLink}
          to="/support/contact"
          sx={{ fontSize: "1rem", whiteSpace: "normal" }}
        >
          Contact Us
        </MenuItem>
      </Menu>
    </>
  );
}

export default SupportMenu;
