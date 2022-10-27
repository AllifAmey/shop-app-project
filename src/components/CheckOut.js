import React, { useState } from "react";
import styles from "./CheckOut.module.css";
import img from "../img/Cards/Product/card-ring.avif";

function CheckOut() {
  return (
    <div className={styles["checkout-container"]}>
      <div className={styles["checkout-title"]}>Order Summary</div>
      <div className={styles["order-item"]}>
        <img src={img} alt="jewellery" className={styles["order-img"]}></img>

        <div className={styles["order-info"]}>
          <div className={styles["order-title"]}>
            <span>Handmade Flower Nature Design Wrist Pin Cushion</span>
          </div>
          <div className={styles["order-quantity"]}>Quantity: 1</div>
        </div>

        <div className={styles["order-price"]}>£3.99</div>
      </div>

      <div className={styles["payment-container"]}>
        <div className={styles["subtotal"]}>
          <div className={styles["subtotal-title"]}>Subtotal</div>
          <div className={styles["subtotal-amount"]}>£3.99</div>
        </div>

        <div className={styles["delivery-fee"]}>
          <div className={styles["delivery-title"]}>Delivery fee</div>
          <div className={styles["delivery-amount"]}>£2.00</div>
        </div>
        <div className={styles["total"]}>
          <div className={styles["total-title"]}>Total to pay</div>
          <div className={styles["total-amount"]}>£5.99</div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
