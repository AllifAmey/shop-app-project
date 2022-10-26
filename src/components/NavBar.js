import * as React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className={styles["nav-bg"]}>
        <div className={styles["nav-container"]}>
          <div className={styles["nav-title"]}>Sahrah Amey Jewellery</div>
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
            <Link className={styles["nav-link"]} to="/help">
              Help
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
