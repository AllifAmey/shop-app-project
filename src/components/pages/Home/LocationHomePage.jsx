import { useState, useEffect, useCallback } from "react";
import styles from "./LocationHomePage.module.css";
import img from "../../assets/img/icons/openSign-icon.png";
import CircularProgress from "@mui/material/CircularProgress";
import OurLocation from "./googleMap";

function LocationHomePage() {
  // https://i.pinimg.com/originals/65/e7/63/65e763df894b30b767e3134675d83767.jpg <-- inspiration

  /*
  docs - 
    logic for layout -
    Looking into the css code. It essentially boils down to big flex box,
    that centers another flexbox which has two other containers,
    one , the map, that has 100% height and 50% width,
    the other containing other boxes.
    One particular box,"article-bottom", is the bottom container of the right-cointainer,
    that has another item overlapping the container to form the illusion of ,
    the sign hanging on this lightly coloured border.

  future - 

  There may be a case to split the components or change the layout for more ,
  market locations , in the event the business expands to different locations.


  */

  const [weatherIcon, setWeatherIcon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeatherHandler = useCallback(async () => {
    const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
    setIsLoading(true);
    // weather data is fetched from the openweathermap api
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`
    );
    const data = await response.json();
    // this returned json data is then used to grab the weather icon
    const icon = data.weather["0"].icon;
    // this icon is then set and used in the jsx code to display the icon.
    setWeatherIcon(icon);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // this is currently only fetched once as I anticipate,
    // users will not stay on the homepage for long time.
    // if they do then I may call it every hour to fully update the weather properly.
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
