import * as React from "react";
import { styled } from "@mui/system";
import styles from "./HomePage.module.css";
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
/*
https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f22e96be8bc2cc5785b_6002086f72b7277a6401e43e_sobremesa.jpeg - look at the white arrow at the bottom. Maybe add that.
https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f2158f4bbbcec10c88f_6002086f72b727f54401e412_space-posters.jpeg - look at the bottom right , add that most likely

https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f23208b459df8790224_6002086f72b7270da901e44a_personalized-cans.jpeg - maybe as inspiration ? Not sure. 
*/
function Hero() {
  /* In the btns show the Online Shop, Physical Shop and scroll down   */
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
              to="/shop"
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
