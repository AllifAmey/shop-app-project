import * as React from "react";
import styles from "./ProductCard.module.css";
import img from "../img/Cards/Product/card-ring.avif";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CustomButton from "./CustomButton";

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: "#ededdf",
    },
  },
});

function ProductCard() {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-container"]}>
        <img src={img} alt="jewellery" className={styles["card-img"]}></img>
        <div className={styles["card-info"]}>
          Handmade Flower Nature Design Wrist Pin Cushion
        </div>
        <div className={styles["card-price"]}>£3.99</div>
        <div className={styles["card-delivery"]}>FREE UK delivery</div>
        <div className={styles["btn-purchase"]}>
          <CustomButton colour="#ced4da"></CustomButton>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
