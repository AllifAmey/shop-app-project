import * as React from "react";
import Box from "@mui/material/Box";
import ringImg from "../img/Homepage/ring-homepage.jpg";
import pinCushionImg from "../img/Homepage/pin-cushion-homepage.jpg";
import scrunchyImg from "../img/Homepage/scrunchy-homepage.jpg";

import { Grid } from "@mui/material";

function ProductHomePage() {
  // https://nl.pinterest.com/pin/254664553914081575/?mt=login - inspiration

  const TitleStyle = { fontSize: "36px", fontWeight: 800 };
  const TextStyle = { fontSize: "24px" };
  return (
    <>
      <Box height="auto" width={1}>
        <Grid container flexDirection="column">
          <Grid item container height="50vh">
            <Grid
              item
              xs={6}
              sx={{
                background: `url(${ringImg}) no-repeat
                center center/cover`,
              }}
            ></Grid>
            <Grid
              item
              container
              xs={6}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                container
                flexDirection="column"
                width={0.8}
                height={0.8}
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Grid
                  item
                  sx={TitleStyle}
                  borderBottom="1px solid grey"
                  paddingBottom="0.5rem"
                  width={0.8}
                  textAlign="center"
                >
                  Handcrafted to Perfection
                </Grid>
                <Grid item sx={TextStyle}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  repudiandae veniam labore quasi? Laudantium obcaecati vero vel
                  ullam hic adipisci!
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item direction="row-reverse" container height="50vh">
            <Grid
              item
              xs={6}
              sx={{
                background: `url(${pinCushionImg}) no-repeat
                center center/cover`,
              }}
            ></Grid>
            <Grid
              item
              container
              xs={6}
              flexDirection="column"
              justifyContent="Center"
              alignItems="center"
            >
              <Grid
                item
                container
                flexDirection="column"
                width={0.8}
                height={0.8}
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Grid
                  item
                  borderBottom="1px solid grey"
                  paddingBottom="0.5rem"
                  width={0.8}
                  textAlign="center"
                  sx={TitleStyle}
                >
                  Created with Emotion
                </Grid>
                <Grid item sx={TextStyle}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  repudiandae veniam labore quasi? Laudantium obcaecati vero vel
                  ullam hic adipisci!
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container height="50vh">
            <Grid
              item
              xs={6}
              sx={{
                background: `url(${scrunchyImg}) no-repeat
                center center/cover`,
              }}
            ></Grid>
            <Grid
              item
              container
              xs={6}
              flexDirection="column"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid
                item
                container
                flexDirection="column"
                width={0.8}
                height={0.8}
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Grid
                  item
                  borderBottom="1px solid grey"
                  paddingBottom="0.5rem"
                  width={0.8}
                  textAlign="center"
                  sx={TitleStyle}
                >
                  Crafted with Care
                </Grid>
                <Grid item sx={TextStyle}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  repudiandae veniam labore quasi? Laudantium obcaecati vero vel
                  ullam hic adipisci!
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ProductHomePage;
