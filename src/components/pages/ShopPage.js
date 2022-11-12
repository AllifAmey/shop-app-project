import React, { useState } from "react";
import styles from "./ShopPage.module.css";
import ProductCard from "../ProductCard";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";
import img from "../../img/Cards/Product/card-ring.avif";
import AnimatedPage from "../utility/AnimatedPage";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ProductBox() {
  /*

  Make the shopping button light grey.

  Product item title to be 12px.
  Make the product info button light grey as well. 
  */
  const shop = useSelector((state) => state.shop.shop);

  const [filters, setFilters] = useState({
    ring: true,
    scrunchy: true,
    pinCushion: true,
  });
  const [ringChecked, setRingChecked] = React.useState(true);
  const [scrunchiesChecked, setSrunchiesChecked] = React.useState(true);
  const [pinCUshionChecked, setPinCushionChecked] = React.useState(true);

  const handleRingFilter = (event) => {
    setFilters({ ...filters, ring: event.target.checked });
    setRingChecked(event.target.checked);
  };
  const handleSrunchiesFilter = (event) => {
    setFilters({ ...filters, scrunchy: event.target.checked });
    setSrunchiesChecked(event.target.checked);
  };
  const handlePinCushionFilter = (event) => {
    setFilters({ ...filters, pinCushion: event.target.checked });
    setPinCushionChecked(event.target.checked);
  };

  return (
    <>
      <AnimatedPage>
        <div className={styles["container"]}>
          <div className={styles["section-container"]}>
            <div className={styles["left-container"]}>
              <div className={styles["filter-container"]}>
                <div className={styles["filter-title"]}>Items</div>
                <div className={styles["filter-item"]}>
                  <div className={styles["filter-name"]}>
                    <Checkbox
                      {...label}
                      checked={pinCUshionChecked}
                      onChange={handlePinCushionFilter}
                    />
                    Pin Cushions
                  </div>
                  <div className={styles["filter-icon-pin"]}></div>
                </div>
                <div className={styles["filter-item"]}>
                  <div className={styles["filter-name"]}>
                    <Checkbox
                      {...label}
                      checked={scrunchiesChecked}
                      onChange={handleSrunchiesFilter}
                    />
                    Scrunchies
                  </div>
                  <div className={styles["filter-icon-scrunchies"]}></div>
                </div>
                <div className={styles["filter-item"]}>
                  <div className={styles["filter-name"]}>
                    <Checkbox
                      {...label}
                      checked={ringChecked}
                      onChange={handleRingFilter}
                    />
                    Rings
                  </div>
                  <div className={styles["filter-icon-ring"]}></div>
                </div>
              </div>
            </div>
            <div className={styles["right-container"]}>
              {Object.keys(shop)
                .filter((cardName) => {
                  console.log(shop[cardName].type.replace(/\s/g, ""));
                  console.log(filters[shop[cardName].type.replace(/\s/g, "")]);
                  if (filters[shop[cardName].type.replace(/\s/g, "")]) {
                    return true;
                  } else {
                    return false;
                  }
                })
                .map((cardName) => {
                  return (
                    <ProductCard
                      key={cardName}
                      type={shop[cardName].type.toLowerCase()}
                      img={shop[cardName].img}
                      price={`£  ${shop[cardName].price.toString()}`}
                      cardName={cardName}
                    ></ProductCard>
                  );
                })}
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}

export default ProductBox;
