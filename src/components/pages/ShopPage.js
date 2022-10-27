import * as React from "react";
import styles from "./ShopPage.module.css";
import ProductCard from "../ProductCard";
import Checkbox from "@mui/material/Checkbox";
import PinCushion from "../../img/icons/pinCushion-icon.png";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ProductBox() {
  /*

  Make the shopping button light grey.

  Product item title to be 12px.
  Make the product info button light grey as well. 
  */
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["section-container"]}>
          <div className={styles["left-container"]}>
            <div className={styles["filter-container"]}>
              <div className={styles["filter-title"]}>Items</div>
              <div className={styles["filter-item"]}>
                <div className={styles["filter-name"]}>
                  <Checkbox {...label} defaultChecked />
                  Pin Cushions
                </div>
                <div className={styles["filter-icon-pin"]}></div>
              </div>
              <div className={styles["filter-item"]}>
                <div className={styles["filter-name"]}>
                  <Checkbox {...label} defaultChecked />
                  Scrunchies
                </div>
                <div className={styles["filter-icon-scrunchies"]}></div>
              </div>
              <div className={styles["filter-item"]}>
                <div className={styles["filter-name"]}>
                  <Checkbox {...label} defaultChecked />
                  Rings
                </div>
                <div className={styles["filter-icon-ring"]}></div>
              </div>
            </div>
          </div>
          <div className={styles["right-container"]}>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductBox;
