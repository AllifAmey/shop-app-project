import * as React from "react";
import styles from "./HomePage.module.css";
import CustomButton from "../utility/CustomButton";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import LocationHomePage from "../LocationHomePage";

import img from "../../img/icons/arrow-down.png";

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
        <div className={styles["title"]}>Amey Jewellery</div>
        <div className={styles["short-info"]}>
          The best handcrafted Jewellery money can buy at a affordable price.
        </div>
        <div className={styles["btn"]}>
          <Button
            variant="contained"
            size="small"
            component={RouterLink}
            to="/shop"
            sx={{ color: "#111122" }}
          >
            Explore Shop
          </Button>
        </div>
        <div className={styles["location-container"]}>
          <div className={styles["location-title"]}>Our Physical shop</div>
          <Link
            to="location"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <img src={img} alt="arrow" className={styles["arrow"]}></img>
          </Link>
        </div>
      </section>
      <LocationHomePage></LocationHomePage>
    </>
  );
}

export default Hero;
