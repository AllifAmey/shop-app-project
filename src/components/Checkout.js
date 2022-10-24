import * as React from "react";
import { styled } from "@mui/system";
import styles from "./Checkout.module.css";
import img from "../img/Cards/Product/card-ring.avif";
import { Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Checkout() {
  /*
    https://boltfinancial.wpengine.com/wp-content/uploads/2019/10/made-checkout-example-progress-indicator-1.png

    Is the inspiration. I love the progress indicator. 
    
    Future-proofing & DRY:

    1. Make the Order item in the summary form a seperate component at least
    2. Make the Order Summary or at least the payment a seperator component to calculate price individually.
    3. Make individual contact sections ( like Last Name ) into a seperate component. 

    When pressing continue , move to the next component and update the progress component.
    After Address and Delivery stage are completed 


    */
  return (
    <>
      <div className={styles["section-container"]}>
        <div className={styles["contact-container"]}>
          <div className={styles["section-title"]}>Delivery Contact</div>
          <div className={styles["first-name"]}>
            <div className={styles["contact-title"]}>First Name</div>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              size="small"
            />
          </div>
          <div className={styles["last-name"]}>
            <div className={styles["contact-title"]}>Last Name</div>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              size="small"
            />
          </div>
          <div className={styles["email"]}>
            <div className={styles["contact-title"]}>Email Address</div>
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              size="small"
            />
          </div>
          <div className={styles["phone"]}>
            <div className={styles["contact-title"]}>Phone</div>
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              size="small"
            />
          </div>
          <div className={styles["btn"]}>
            <Button
              variant="text"
              size="big"
              component={Link}
              to="/checkout"
              style={{ fontSize: "16px" }}
            >
              Continue
            </Button>
          </div>
        </div>

        <div className={styles["checkout-container"]}>
          <div className={styles["checkout-title"]}>Order Summary</div>
          <div className={styles["order-item"]}>
            <img
              src={img}
              alt="jewellery"
              className={styles["order-img"]}
            ></img>

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
      </div>
    </>
  );
}

export default Checkout;
