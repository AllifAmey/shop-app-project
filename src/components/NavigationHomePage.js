import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import supportIcon from "../img/icons/support-icon.png";
import ideaIcon from "../img/icons/idea-icon.png";
import shopIcon from "../img/icons/shop-icon.png";

function NavigationHomePage() {
  // https://blog.hubspot.com/hs-fs/hubfs/Shopify-1.jpg?width=650&name=Shopify-1.jpg- inspiration

  const navItemTitleStyle = {
    fontSize: "30px",
    fontWeight: 800,
  };
  const navItemImageStyle = {
    height: "50px",
    width: "50px",
  };
  const navItemTextStyle = {
    fontSize: "20px",
    width: "80%",
    textAlign: "center",
  };
  return (
    <>
      <Box height="auto" width={1}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          height="50vh"
          width={1}
        >
          <Grid
            item
            container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            xs={4}
            height={0.8}
            gap={1}
            padding="1rem"
          >
            <Grid
              item
              component="img"
              src={ideaIcon}
              sx={navItemImageStyle}
            ></Grid>
            <Grid item sx={navItemTitleStyle}>
              Our Philosophy
            </Grid>
            <Grid item sx={navItemTextStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              explicabo beatae laudantium numquam magni natus?
            </Grid>
          </Grid>
          <Grid
            item
            container
            flexDirection="column"
            xs={4}
            height={0.8}
            gap={1}
            padding="1rem"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              component="img"
              src={shopIcon}
              sx={navItemImageStyle}
            ></Grid>
            <Grid item sx={navItemTitleStyle}>
              Shop
            </Grid>
            <Grid item sx={navItemTextStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              explicabo beatae laudantium numquam magni natus?
            </Grid>
          </Grid>
          <Grid
            item
            container
            flexDirection="column"
            xs={4}
            height={0.8}
            gap={1}
            padding="1rem"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              component="img"
              src={supportIcon}
              sx={navItemImageStyle}
            ></Grid>
            <Grid item sx={navItemTitleStyle}>
              Support
            </Grid>
            <Grid item sx={navItemTextStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              explicabo beatae laudantium numquam magni natus?
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default NavigationHomePage;
