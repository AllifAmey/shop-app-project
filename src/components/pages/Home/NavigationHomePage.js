import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import supportIcon from "../../assets/img/icons/support-icon.png";
import ideaIcon from "../../assets/img/icons/idea-icon.png";
import shopIcon from "../../assets/img/icons/shop-icon.png";

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
              Less is more. Simple is good. Beauty is in the eye of the
              beholder.
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
              My shop will be focussed on jewellery and findings I make. All
              findings are good quality authentic material.
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
              If there any inquiries regarding the product please visit the
              contact us page or read the FAQs.
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default NavigationHomePage;
