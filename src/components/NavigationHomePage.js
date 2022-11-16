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
  return (
    <>
      <Container maxWidth="md" height="auto">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          height="50vh"
          gap={2}
        >
          <Grid
            item
            container
            flexDirection="column"
            xs
            height={0.8}
            gap={1}
            padding="1rem"
          >
            <Grid
              item
              component="img"
              src={ideaIcon}
              sx={{ height: "25px", width: "25px" }}
            ></Grid>
            <Grid item fontWeight={800} fontSize={18}>
              Our Philosophy
            </Grid>
            <Grid item fontSize={14}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              explicabo beatae laudantium numquam magni natus?
            </Grid>
          </Grid>
          <Grid
            item
            container
            flexDirection="column"
            xs
            height={0.8}
            gap={1}
            padding="1rem"
          >
            <Grid
              item
              component="img"
              src={shopIcon}
              sx={{ height: "25px", width: "25px" }}
            ></Grid>
            <Grid item fontWeight={800} fontSize={18}>
              Shop
            </Grid>
            <Grid item fontSize={14}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              explicabo beatae laudantium numquam magni natus?
            </Grid>
          </Grid>
          <Grid
            item
            container
            flexDirection="column"
            xs
            height={0.8}
            gap={1}
            padding="1rem"
          >
            <Grid
              item
              component="img"
              src={supportIcon}
              sx={{ height: "25px", width: "25px" }}
            ></Grid>
            <Grid item fontWeight={800} fontSize={18}>
              Support
            </Grid>
            <Grid item fontSize={14}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              explicabo beatae laudantium numquam magni natus?
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default NavigationHomePage;
