import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import styles from "./MainSectionTablet.module.css";
import arrowImg from "../../../../assets/img/icons/arrow-down.png";

function MainSectionTablet() {
  /*
  
  docs - 
    Logic for layout - 
    essentially the image is placed in the center of a 90vh 100% container
    Another container is overlapped in that which contains the exact length and height of the image container
    This particular container that overlaps the image is used to darken the image
    On top of the image layer another layer is overlapped called center-container and location-container,
    these two containers are the text that overlaps the darken sunk background to give the illusion of ,
    the text being lifted up, the z-index is important as it directly lifts the importance of the background.
   
   */
  return (
    <>
      <section
        className={styles["main"]}
        title="Jewellery hammered in background"
      >
        <div className={styles["center-container"]}>
          <div className={styles["title"]}>UniqueShopGB</div>
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
              fontSize: "1rem",
            }}
            aria-label="Button link to Product Page"
            data-cy="Explore Shop"
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
            href="#"
          >
            <img
              src={arrowImg}
              alt="arrow"
              title="Click and scroll to the bottom."
              width="50px"
              height="50px"
            ></img>
          </Link>
        </div>
      </section>
    </>
  );
}

export default MainSectionTablet;
