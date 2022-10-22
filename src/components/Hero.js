import * as React from "react";
import { styled } from "@mui/system";
import styles from "./Hero.module.css";
import { Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: "#613500",
    },
  },
});
function Hero() {
  return (
    <>
      <section className={styles["main"]}>
        <div className={styles["title"]}>Sahrah Amey Jewellery</div>
        <div className={styles["short-info"]}>
          The best handcrafted Jewellery money can buy at a affordable price.
        </div>
        <div className={styles["btn"]}>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              size="medium"
              color="secondary"
              style={{ fontSize: "10px" }}
              component={Link}
              to="/product"
            >
              Explore Shop
            </Button>
          </ThemeProvider>
        </div>
      </section>
    </>
  );
}

export default Hero;
