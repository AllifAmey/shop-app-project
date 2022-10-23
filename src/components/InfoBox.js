import * as React from "react";
import { styled } from "@mui/system";
import styles from "./InfoBox.module.css";
import img from "../img/Cards/Product/card-ring.avif";
import { Routes, Route, Link } from "react-router-dom";

import Button from "@mui/material/Button";

function InfoBox() {
  /*
    Vision:
    Left 60% - product image.
    Right 40% - product info
    
    Right section:
    Title big letters
    detail  medium letters
    detail - cold description :
    1. Size
    2. Materials.
    description : 

    marketing description - use lorem ipsum as placeholder.

    price small letters 

    */

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["product"]}>
          <img
            src={img}
            alt="jewellery"
            className={styles["product-img"]}
          ></img>
        </div>

        <div className={styles["product-info"]}>
          <div className={styles["product-container"]}>
            <div className={styles["product-title"]}>
              Handmade Flower Nature Design Wrist Pin Cushion
            </div>
            <div className={styles["detail-title"]}>Details:</div>
            <div className={styles["detail-info"]}>
              <div className={styles["detail-item"]}>Handmade item </div>
              <div className={styles["detail-item"]}>
                Handmade item Dispatches from a small business in United Kingdom{" "}
              </div>
              <div className={styles["detail-item"]}>Materials: copper </div>
              <div className={styles["detail-item"]}>FREE UK delivery </div>
            </div>
            <div className={styles["description-title"]}>Description</div>
            <div className={styles["description-info"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Faucibus et molestie ac feugiat sed lectus. Ut lectus arcu
              bibendum at varius. Velit scelerisque in dictum non. Sagittis eu
              volutpat odio
            </div>
            <div className={styles["price"]}>£3.99</div>

            <div className={styles["btns"]}>
              <Button
                variant="contained"
                size="small"
                component={Link}
                to="/product-description"
                style={{ fontSize: "10px" }}
              >
                Buy Now!
              </Button>
              <Button
                variant="contained"
                size="small"
                component={Link}
                to="/product-description"
                style={{ fontSize: "10px" }}
              >
                Add Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoBox;