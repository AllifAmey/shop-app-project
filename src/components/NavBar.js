import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

function NavBar() {
  /* Shadow types - could add to toolbox document
  https://getcssscan.com/css-box-shadow-examples 

  put a scroll down menu when u hover over help
  to show FAQ and contact us.
  Contact us to be seperate page. 
  
  */

  // I have a misunderstand on what event does that was the issue.
  // I also used mouseover and mouseleave at the same time causing some sort of issue

  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <div className={styles["nav-bg"]}>
        <div className={styles["nav-container"]}>
          <div className={styles["nav-title"]}>Amey Jewellery</div>
          <div className={styles["nav-items"]}>
            <Link className={styles["nav-link"]} to="/home">
              Home
            </Link>
            <Link className={styles["nav-link"]} to="/shop">
              Shop
            </Link>
            <Link className={styles["nav-link"]} to="/story">
              Our Story
            </Link>

            <Link
              className={styles["nav-link"]}
              to="/help"
              onMouseOver={handleClick}
            >
              Support
            </Link>
            <Menu
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem component={Link} to="/support/faq">
                FAQ
              </MenuItem>
              <MenuItem component={Link} to="/support/contact">
                Contact us
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
