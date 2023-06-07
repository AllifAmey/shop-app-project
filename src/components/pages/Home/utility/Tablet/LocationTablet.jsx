import styles from "./LocationTablet.module.css";

import { useInView } from "react-intersection-observer";
import googlemap from "../../../../assets/img/Homepage/our-location-google-map.png";
import openSignImg from "../../../../assets/img/icons/openSign-icon.png";

function LocationTablet(props) {
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

  current - 

  The decision has been to not rely on google map api as it is far too slow and ,
  not really necessary. Upon the expansion of the business, I will include google map,
  api again. 
  Instead a snapshot has been taken and a img tag is used to display it.
  Weather api remains unchanged unlike the google map api it is not static and needs update.  

  */
  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <>
      <div className={styles["main-container"]} id="location" ref={ref}>
        {inView ? (
          <div className={styles["section-container"]}>
            <img
              src={googlemap}
              alt="google map"
              loading="lazy"
              height="100%"
              width="50%"
              title="Map showing location of the shop."
              style={{ objectFit: "cover" }}
            />
            <div className={styles["right-container"]}>
              <div className={styles["article-container"]}>
                <div className={styles["article-heading"]}>
                  <div className={styles["article-title"]}>
                    Our Physical Location
                  </div>
                  <div className={styles["article-weather"]}>Weather</div>
                  <div className={styles["article-weatherStatus"]}>
                    <img
                      src={`https://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`}
                      alt="Weather icon"
                      loading="lazy"
                      title="Current weather at our shop."
                      height="50px"
                      width="50px"
                    />
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
                        src={openSignImg}
                        alt="open-sign"
                        loading="lazy"
                        title="Opening Sign"
                        height="50px"
                        width="50px"
                        className={styles["open-sign"]}
                      ></img>
                      <div className={styles["article-timeBox"]}>
                        <div className={styles["article-days"]}>
                          Saturday - Sunday
                        </div>
                        <div className={styles["article-times"]}>
                          8am to 6pm!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default LocationTablet;
