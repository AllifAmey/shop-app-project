import * as React from "react";
import { styled } from "@mui/system";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <div className={styles["nav-bg"]}>
        <div className={styles["nav-container"]}>
          <div className={styles["nav-title"]}>Sahrah Amey Jewellery</div>
          <div className={styles["nav-items"]}>
            <div>Home</div>
            <div>Product</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
