import React, { useState } from "react";
import ProductCard from "../ProductCard";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";
import imgPin from "../../img/icons/pinCushion-icon.png";
import imgSrunchy from "../../img/icons/scrunchies-icon.png";
import imgRing from "../../img/icons/ring-icon.png";
import AnimatedPage from "../utility/AnimatedPage";
import { Grid } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ShopPage() {
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

  const filterItemStyle = {
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "20%",
    width: "100%",
  };

  const filterNameStyle = {
    width: "80%",
    fontSize: "20px",
  };

  const filterImgStyle = {
    height: "25px",
    width: "25px",
  };

  return (
    <>
      <AnimatedPage>
        <Grid
          container
          height="auto"
          width={1}
          justifyContent="center"
          margin="2rem 0 "
        >
          <Grid
            item
            container
            alignSelf="start"
            flexDirection="column"
            justifyContent="start"
            alignContent="center"
            xs={2}
          >
            <Grid container flexDirection="column" height={0.5} width={0.9}>
              <Grid fontSize={30} textAlign="center" padding="20px 0 40px">
                Items
              </Grid>
              <Grid container sx={filterItemStyle}>
                <Grid item sx={filterNameStyle}>
                  <Checkbox
                    {...label}
                    checked={pinCUshionChecked}
                    onChange={handlePinCushionFilter}
                  />
                  Pin Cushions
                </Grid>
                <Grid sx={filterImgStyle} component="img" src={imgPin}></Grid>
              </Grid>
              <Grid container sx={filterItemStyle}>
                <Grid item sx={filterNameStyle}>
                  <Checkbox
                    {...label}
                    checked={scrunchiesChecked}
                    onChange={handleSrunchiesFilter}
                  />
                  Scrunchies
                </Grid>
                <Grid
                  sx={filterImgStyle}
                  component="img"
                  src={imgSrunchy}
                ></Grid>
              </Grid>
              <Grid container sx={filterItemStyle}>
                <Grid item sx={filterNameStyle}>
                  <Checkbox
                    {...label}
                    checked={ringChecked}
                    onChange={handleRingFilter}
                  />
                  Rings
                </Grid>
                <Grid sx={filterImgStyle} component="img" src={imgRing}></Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            height="100vh"
            width={0.8}
            gap={2}
            justifyContent="start"
            alignItems="start"
            xs={9}
          >
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
          </Grid>
        </Grid>
      </AnimatedPage>
    </>
  );
}

export default ShopPage;
