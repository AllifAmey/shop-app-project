import React, { useState } from "react";
import { styled } from "@mui/system";
import styles from "./CheckoutStep2.module.css";
import img from "../img/Cards/Product/card-ring.avif";
import { Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function CheckoutStep2(props) {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
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
