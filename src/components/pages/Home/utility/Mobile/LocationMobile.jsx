import { useState } from "react";
import img from "../../../../assets/img/icons/openSign-icon.png";
import { useInView } from "react-intersection-observer";
import googlemap from "../../../../assets/img/Homepage/our-location-google-map.png";

import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

function LocationMobile(props) {
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

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <>
      <Grid id="location" ref={ref}>
        {inView ? (
          <Grid
            container
            flexDirection="column"
            sx={{
              height: "100vh",
              width: "100%",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Grid fontSize="30px">{`Our ${
              checked ? "Location" : "Opening times"
            }`}</Grid>
            {checked && (
              <img
                src={googlemap}
                alt="google map"
                loading="lazy"
                style={{ height: "80%", width: "90%", objectFit: "cover" }}
              />
            )}
            {!checked && (
              <Grid item>
                <Grid container justifyContent="center">
                  <Grid item fontSize="20px">
                    Current Weather
                  </Grid>
                  <Grid item xs={6}>
                    <img
                      src={`https://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`}
                      alt="Weather icon"
                      loading="lazy"
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
            {!checked && (
              <Grid
                item
                sx={{
                  position: "relative",
                  height: "50%",
                  width: "60%",
                  backgroundColor: "#c5f6fa",
                  borderRadius: "5%",
                }}
              >
                <Grid
                  sx={{
                    position: "absolute",
                    left: "10%",
                    top: "10%",
                    height: "80%",
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div style={{ fontSize: "20px", fontWeight: "800" }}>
                    Jubilee Market
                  </div>
                  <div>1 Tavistock St, London WC2E 8BD</div>
                  <img
                    src={img}
                    alt="open-sign"
                    style={{ height: "50px", width: "50px", margin: "0 auto" }}
                  ></img>
                  <div style={{ fontWeight: "800" }}>Saturday - Sunday</div>
                  <div style={{ fontWeight: "800" }}>8am to 6pm!</div>
                </Grid>
                <Grid
                  sx={{
                    position: "absolute",
                    height: "45%",
                    width: "80%",
                    border: "3px solid #e7f5ff",
                    top: "42%",
                    left: "10%",
                    borderRadius: "10%",
                  }}
                ></Grid>
              </Grid>
            )}
            <Grid item>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              {`Click for ${checked ? "opening time" : "Map location"}`}
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}

export default LocationMobile;
