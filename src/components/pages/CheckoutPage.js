import React, { useState } from "react";
import styles from "./CheckoutPage.module.css";
import img from "../../img/Cards/Product/card-ring.avif";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CheckoutSteps from "../CheckoutSteps";

function Checkout() {
  /*
    https://boltfinancial.wpengine.com/wp-content/uploads/2019/10/made-checkout-example-progress-indicator-1.png

    Is the inspiration. I love the progress indicator. 
    
    Future-proofing & DRY:

    1. Make the Order item in the summary form a seperate component at least
    2. Make the Order Summary or at least the payment a seperator component to calculate price individually.
    3. Make individual contact sections ( like Last Name ) into a seperate component.

    When pressing continue , move to the next component and update the progress component.
    After Address and Delivery stage are completed.

    current idea on implementation of Stepper:

    I don't want to dwell into functionality too much at this stage, I want a foundation to build upon. To adhere to that, use the bare minimum.

    First use of functionality will be the use of states.

    Use useState to track the state of the step. Show the component corresponding to the state.

    Further investigation into made shows the full steps 

    Address contains 2 parts with no indicator, I could add that through animation.

    2nd part - 

    Address
    2 textinputfields
    City
    1 Textinputfield
    PostCode
    1 short Textinputfield
    Country
    Select widget from material UI is very similar.

    Delivery

    A list of products , I assume, is shown above. 
    Shows different standards of delivery
    Standard 
    Saturday Delivery
    Sunday Delivery

    Idea of delivery : show fast vs slow or estimate the time.

    Payment

    This is typical payment form that can be implemented much later.

    */

  const [count, setCount] = useState(0);

  const changeStep = (event) => {
    setCount(count + 1);
  };

  return (
    <>
      <div className={styles["sectionProgress-container"]}>
        <div className={styles["progress-container"]}>
          <Stepper
            alternativeLabel
            activeStep={count == 1 || count == 0 ? 0 : count - 1}
          >
            <Step>
              <StepLabel>Address</StepLabel>
            </Step>
            <Step>
              <StepLabel>Delivery</StepLabel>
            </Step>
            <Step>
              <StepLabel>Payments</StepLabel>
            </Step>
          </Stepper>
        </div>
      </div>
      <div className={styles["section-container"]}>
        {<CheckoutSteps count={count} onCount={changeStep}></CheckoutSteps>}

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
