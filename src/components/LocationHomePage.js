import React, { useState, useMemo } from "react";
import styles from "./LocationHomePage.module.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Home from "./googleMap";

function LocationHomePage() {
  // This could be difficult
  // This requires Google Map API, weather API

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
              <div className={styles["article-subContainer"]}>
                <div className={styles["article-subTitle"]}>Jubilee Market</div>
                <div className={styles["article-content"]}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  cumque libero, doloremque obcaecati vero esse! Ab harum
                  repellat unde eveniet.
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
