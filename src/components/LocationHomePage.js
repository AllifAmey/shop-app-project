import React, { useState, useMemo } from "react";
import styles from "./LocationHomePage.module.css";
import img from "../img/icons/openSign-icon.png";

import Home from "./googleMap";

function LocationHomePage() {
  // This could be difficult
  // This requires Google Map API, weather API

  // https://i.pinimg.com/originals/65/e7/63/65e763df894b30b767e3134675d83767.jpg <-- inspiration

  return (
    <>
      <div className={styles["main-container"]}>
        <div className={styles["section-container"]}>
          <Home> </Home>

          <div className={styles["right-container"]}>
            <div className={styles["article-container"]}>
              <div className={styles["article-title"]}>
                Our Physical Location
              </div>
              <div className={styles["article-card"]}>
                <div className={styles["article-subContainer"]}>
                  <div className={styles["article-top"]}>
                    <div className={styles["article-subTitle"]}>
                      Jubilee Market
                    </div>
                    <div className={styles["article-address"]}>
                      1 Tavistock St, London WC2E 8BD
                    </div>
                  </div>
                  <div className={styles["article-bottom"]}>
                    <img
                      src={img}
                      alt="jewellery"
                      className={styles["open-sign"]}
                    ></img>
                    <div className={styles["article-timeBox"]}>
                      <div className={styles["article-days"]}>
                        Saturday - Sunday
                      </div>
                      <div className={styles["article-times"]}>8am to 6pm!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LocationHomePage;
