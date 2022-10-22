import * as React from "react";
import { styled } from "@mui/system";
import styles from "./NavBar.module.css";
import { Routes, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className={styles["nav-bg"]}>
        <div className={styles["nav-container"]}>
          <div className={styles["nav-title"]}>Sahrah Amey Jewellery</div>
          <div className={styles["nav-items"]}>
            <Link to="/home">Home</Link>
            <Link to="/product">Product</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
