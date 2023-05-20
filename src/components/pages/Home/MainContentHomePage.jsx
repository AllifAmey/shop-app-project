import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import styles from "./MainContentHomePage.module.css";
import img from "../../assets/img/icons/arrow-down.png";

function MainContentHomePage() {
  return (
    <>
      <section
        className={styles["main"]}
        title="Jewellery hammered in background"
      >
        <div className={styles["center-container"]}>
          <div className={styles["title"]}>SahrahJewellery</div>
          <div className={styles["short-info"]}>
            The best handcrafted Jewellery money can buy at a affordable price.
          </div>
        </div>
        <RouterLink to="/shop" title="Explore Shop">
          <Button
            variant="contained"
            size="big"
            color="primary"
            sx={{
              fontSize: "15px",
            }}
            aria-label="Button link to Product Page"
          >
            Explore Shop
          </Button>
        </RouterLink>

        <div className={styles["location-container"]}>
          <div className={styles["location-title"]}>Our Physical shop</div>
          <Link
            to="location"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <img
              src={img}
              alt="arrow"
              className={styles["arrow"]}
              style={{ width: "50px", height: "50px" }}
            ></img>
          </Link>
        </div>
      </section>
    </>
  );
}

export default MainContentHomePage;
