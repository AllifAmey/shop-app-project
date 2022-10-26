import React, { useState } from "react";
import styles from "./CheckoutStep2.module.css";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";

function CheckoutStep2(props) {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  /*Inspiration: 
  https://help-uk.newlook.com/hc/article_attachments/4410674657553/Standard.jpg */
  return (
    <>
      <div className={styles["section-container"]}>
        <div class={styles["delivery-title"]}>Delivery Type!</div>
        <div class={styles["delivery-container"]}>
          <div>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            £2.99
          </div>

          <div class={styles["delivery-subContainer"]}>
            <div class={styles["delivery-time"]}>Delivered by Thu 18 Nov</div>
            <div class={styles["delivery-type"]}>Standard Delivery</div>
          </div>
        </div>

        <div class={styles["delivery-container"]}>
          <div>
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
            />
            £3.99
          </div>

          <div class={styles["delivery-subContainer"]}>
            <div class={styles["delivery-time"]}>Delivered by Tue 15 Nov</div>
            <div class={styles["delivery-type"]}>Premium Delivery</div>
          </div>
        </div>
        <div class={styles["btn"]}>
          <Button
            variant="text"
            size="big"
            onClick={props.onCount}
            style={{ fontSize: "16px" }}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
}

export default CheckoutStep2;
