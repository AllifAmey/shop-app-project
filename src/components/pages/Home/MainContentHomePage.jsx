import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import styles from "./MainContentHomePage.module.css";
import img from "../../assets/img/icons/arrow-down.png";

function MainContentHomePage() {
  return (
    <>
      <button
        style={{
          backgroundColor: "red",
        }}
      >
        Change to blue
      </button>
      <section className={styles["main"]}>
        <div className={styles["center-container"]}>
          <div className={styles["title"]}>SahrahJewellery</div>
          <div className={styles["short-info"]}>
            The best handcrafted Jewellery money can buy at a affordable price.
          </div>
        </div>
        <Button
          variant="contained"
          size="big"
          color="primary"
          sx={{
            fontSize: "15px",
          }}
        >
          <RouterLink
            to="/shop"
            title="Explore Shop"
            aria-label="link to Product Page"
          >
            Explore Shop
          </RouterLink>
        </Button>

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
