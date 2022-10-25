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

function CheckoutStep2() {
  return (
    <>
      <div className={styles["delivery-container"]}></div>
    </>
  );
}

export default CheckoutStep2;
