import React, { useState } from "react";
import { styled } from "@mui/system";
import styles from "./Checkout.module.css";
import img from "../img/Cards/Product/card-ring.avif";
import { Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CheckoutStep1_2 from "./CheckoutStep1_2";
import CheckoutStep1_1 from "./CheckoutStep1_1";
import CheckoutStep2 from "./CheckoutStep2";
import CheckoutStep3 from "./CheckoutStep3";
import CheckoutComplete from "./CheckoutComplete";

function CheckoutSteps(props) {
  /* All the data could be coalesed here via the two-way binding,
   then presented in the last step.
   */
  if (props.count == 0) {
    return <CheckoutStep1_1 onCount={props.onCount}></CheckoutStep1_1>;
  } else if (props.count == 1) {
    return <CheckoutStep1_2 onCount={props.onCount}></CheckoutStep1_2>;
  } else if (props.count == 2) {
    return <CheckoutStep2 onCount={props.onCount}></CheckoutStep2>;
  } else if (props.count == 3) {
    return <CheckoutStep3 onCount={props.onCount}></CheckoutStep3>;
  } else {
    return <CheckoutComplete></CheckoutComplete>;
  }
}

export default CheckoutSteps;
