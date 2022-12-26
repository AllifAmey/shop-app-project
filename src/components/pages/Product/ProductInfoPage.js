import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AnimatedPopUpPage from "../../utility/AnimatedPopUpPage";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

import { getSpecificProduct } from "../../services/Internal_API/ShopAPI/Products/ProductsAPI";

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
  const [shop, setShop] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // redux

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

  // useEffect

  useEffect(() => {
    const product_id = Number(
      params.productId.slice(
        params.productId.lastIndexOf("-") + 1,
        params.productId.length
      )
    );
    getSpecificProduct(setIsLoading, product_id).then((product_data) => {
      console.log(product_data);
      console.log(product_data.description_short.split("#"));

      setShop(product_data);
    });
  }, []);

  return (
    <>
      {isLoading == true || shop == undefined ? (
        <CircularProgress />
      ) : (
        <AnimatedPopUpPage>
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
                  src={shop.image_url}
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
                  Handmade {shop.name.toLowerCase()}
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
                  {shop.description_short.split("#").map((e) => {
                    return <Grid item>{e}</Grid>;
                  })}
                </Grid>
                <Grid item sx={subTitleStyle} alignSelf="start">
                  Description
                </Grid>
                <Grid item>{shop.description_long}</Grid>
                <Grid item>£3.99</Grid>
                <Grid item container justifyContent="space-evenly" gap={1.5}>
                  <Grid item>
                    <Button
                      variant="contained"
                      size="big"
                      component={RouterLink}
                      to="/checkout"
                      sx={{ fontSize: "16px" }}
                    >
                      Check Out
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      size="big"
                      component={RouterLink}
                      to="/checkout"
                      sx={{ fontSize: "16px" }}
                    >
                      Add Cart
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </AnimatedPopUpPage>
      )}
    </>
  );
}

export default ProductInfoPage2;
