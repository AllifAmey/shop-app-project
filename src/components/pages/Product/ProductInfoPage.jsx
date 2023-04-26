import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { Suspense } from "react";
import {
  Link as RouterLink,
  useLoaderData,
  json,
  Await,
  defer,
} from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AnimatedPopUpPage from "../../utility/AnimatedPopUpPage";
import CircularProgress from "@mui/material/CircularProgress";
import domain from "../../services/domain";

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
  /* 
  Referance to this component can be seen in the route. 
  It is directed when the user presses the "buy now" button . 

  The way this works is the product id is grabbed from the url,
  then that product id is used fetch that specific product's information.
  It is then this product's information that is used to display the information in the ,
  ProductInfoPage
  
  */

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

  // TODO: Look into Django to see if there is a seperator for this instead of doing it
  // on the frontend.

  const { productDetail } = useLoaderData();

  return (
    <>
      <Suspense
        fallback={
          <CircularProgress
            size="25rem"
            sx={{ margin: "auto" }}
          ></CircularProgress>
        }
      >
        <Await resolve={productDetail}>
          {(loadedProductDetail) => (
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
                      src={loadedProductDetail.image_url}
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
                      Handmade {loadedProductDetail.name.toLowerCase()}
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
                      {loadedProductDetail.description_short
                        .split("#")
                        .map((e) => {
                          return <Grid item>{e}</Grid>;
                        })}
                    </Grid>
                    <Grid item sx={subTitleStyle} alignSelf="start">
                      Description
                    </Grid>
                    <Grid item>{loadedProductDetail.description_long}</Grid>
                    <Grid item>{loadedProductDetail.price}</Grid>
                    <Grid
                      item
                      container
                      justifyContent="space-evenly"
                      gap={1.5}
                    >
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
        </Await>
      </Suspense>
    </>
  );
}

export default ProductInfoPage2;

async function loadProductDetail(product_id) {
  const response = await fetch(`${domain}/api/shop/products/${product_id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!response.ok) {
    throw json(
      { message: "Could not fetch products" },
      { status: response.status }
    );
  } else {
    const data = await response.json();
    console.log(data);
    return data;
  }
}

export function loader({ params, request }) {
  const product_id = Number(
    params.productId.slice(
      params.productId.lastIndexOf("-") + 1,
      params.productId.length
    )
  );
  return defer({
    productDetail: loadProductDetail(product_id),
  });
}
