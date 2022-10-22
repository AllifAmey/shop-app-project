import * as React from "react";
import { styled } from "@mui/system";
import styles from "./Productcard.module.css";
import img from "../img/Cards/Product/card1-img.avif";
import Button from "@mui/material/Button";

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
          <Button variant="contained" size="small" style={{ fontSize: "10px" }}>
            Buy Now!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
