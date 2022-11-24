import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import img from "../../img/Cards/Product/card-ring.avif";
import AnimatedPage from "../utility/AnimatedPage";
import { useSelector } from "react-redux";

function ProductInfoPage2() {
  /*
   comment from the old code: 
    Vision:
    Left 60% - product image.
    Right 40% - product info
    
    Right section:
    Title big letters
    detail  medium letters
    detail - cold description :
    1. Size
    2. Materials.
    description : 

    marketing description - use lorem ipsum as placeholder.

    price small letters 

    */
  // styles
  const mainContainerStyles = {
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const mainGridContainerStyles = {
    fontSize: "20px",
  };
  const imgStyle = { borderRadius: "50%", height: "500px", width: "500px" };
  const mainHeaderStyle = { fontSize: "30px" };
  const subTitleStyle = { fontSize: "24px" };

  // routing

  const params = useParams();

  // redux

  const shop = useSelector((state) => state.shop.shop);

  function findProductImg() {
    // logic is to filter the shop to find the exact img.

    // later a unique id would be placed on the product to better identify the product.
    // this is a simple solution and a solid foundation for a bigger problem I will solve.

    const img = Object.entries(shop).filter(
      (e) =>
        shop[e[0]].type.toLowerCase() ==
        params.productId
          .slice(params.productId.indexOf("-") + 1, params.productId.length)
          .replace("-", " ")
    )[0][1].img;

    return img;
  }

  return (
    <>
      <AnimatedPage>
        <Container maxWidth="lg" sx={mainContainerStyles}>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            sx={mainGridContainerStyles}
            padding="2rem 0"
          >
            <Grid
              item
              container
              xs={8}
              justifyContent="center"
              alignItems="center"
            >
              <Box
                component="img"
                alt="jewellery"
                src={findProductImg()}
                sx={imgStyle}
              ></Box>
            </Grid>
            <Grid
              item
              container
              xs={4}
              sx={mainContainerStyles}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap={2}
            >
              <Grid item sx={mainHeaderStyle} alignSelf="start">
                Handmade{" "}
                {params.productId
                  .slice(
                    params.productId.indexOf("-") + 1,
                    params.productId.length
                  )
                  .replace("-", " ")}
              </Grid>
              <Grid item sx={subTitleStyle} alignSelf="start">
                Details
              </Grid>
              <Grid
                item
                container
                justifyContent="space-evenly"
                alignItems="start"
                flexDirection="column"
                gap={1.5}
                paddingLeft="1rem"
              >
                <Grid item>Handmade item</Grid>
                <Grid item>
                  Handmade item Dispatches from a small business in United
                  Kingdom
                </Grid>
                <Grid item>Materials: copper</Grid>
                <Grid item>FREE UK delivery </Grid>
              </Grid>
              <Grid item sx={subTitleStyle} alignSelf="start">
                Description
              </Grid>
              <Grid item>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Faucibus et molestie ac feugiat sed lectus. Ut lectus arcu
                bibendum at varius. Velit scelerisque in dictum non. Sagittis eu
                volutpat odio
              </Grid>
              <Grid item>£3.99</Grid>
              <Grid item container justifyContent="space-evenly" gap={1.5}>
                <Grid item>
                  <Button
                    variant="contained"
                    size="small"
                    component={RouterLink}
                    to="/checkout"
                  >
                    Check Out
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    size="small"
                    component={RouterLink}
                    to="/checkout"
                  >
                    Add Cart
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AnimatedPage>
    </>
  );
}

export default ProductInfoPage2;
