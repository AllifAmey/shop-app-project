import React, { useState, useEffect, useCallback } from "react";
import styles from "./LocationHomePage.module.css";
import img from "../../assets/img/icons/openSign-icon.png";
import CircularProgress from "@mui/material/CircularProgress";
import OurLocation from "./googleMap";

function LocationHomePage() {
  // https://i.pinimg.com/originals/65/e7/63/65e763df894b30b767e3134675d83767.jpg <-- inspiration

  const [weatherIcon, setWeatherIcon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeatherHandler = useCallback(async () => {
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    setIsLoading(true);
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
    console.log(data.weather["0"].icon);

    const icon = data.weather["0"].icon;

    setWeatherIcon(icon);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchWeatherHandler();
  }, [fetchWeatherHandler]);

  return (
    <>
      <div className={styles["main-container"]} id="location">
        <div className={styles["section-container"]}>
          <OurLocation> </OurLocation>
          <div className={styles["right-container"]}>
            <div className={styles["article-container"]}>
              <div className={styles["article-heading"]}>
                <div className={styles["article-title"]}>
                  Our Physical Location
                </div>
                <div className={styles["article-weather"]}>Weather</div>
                <div className={styles["article-weatherStatus"]}>
                  {!isLoading && (
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                      alt="Weather icon"
                      className={styles["weather-icon"]}
                    />
                  )}
                  {isLoading && (
                    <CircularProgress size="1.5rem" sx={{ margin: 1 }} />
                  )}
                </div>
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
                      alt="open-sign"
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
