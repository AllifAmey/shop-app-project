import * as React from "react";
import { styled } from "@mui/system";
import styles from "./ProductBox.module.css";
import img from "../img/Cards/Product/card-ring.avif";
import Button from "@mui/material/Button";
import ProductCard from "./ProductCard";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ProductBox() {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["filter"]}>
          <div className={styles["filter-title"]}>Items</div>
          <div className={styles["filter-item"]}>
            <Checkbox {...label} defaultChecked />
            Pin Cushions
          </div>
          <div className={styles["filter-item"]}>
            <Checkbox {...label} defaultChecked />
            Scrunchies
          </div>
          <div className={styles["filter-item"]}>
            <Checkbox {...label} defaultChecked />
            Rings
          </div>
        </div>
        <div className={styles["product-side"]}>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </div>
    </>
  );
}

export default ProductBox;
