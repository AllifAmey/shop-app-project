import AnimatedPopUpPage from "../../utility/AnimatedPopUpPage";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

function ProductDetailMobile(props) {
  /*
    docs:
      Read ProductInfoPage.jsx docs
      
  */

  // styles
  const mainContainerStyles = {
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const mainGridContainerStyles = {
    fontSize: "1rem",
  };
  const imgStyle = { borderRadius: "50%", height: "200px", width: "200px" };
  const mainHeaderStyle = { fontSize: "26px", fontWeight: "800" };
  const subTitleStyle = { fontSize: "20px" };
  return (
    <AnimatedPopUpPage>
      <Container maxWidth="lg" sx={mainContainerStyles}>
        <Grid
          container
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          sx={mainGridContainerStyles}
          padding="2rem 0"
        >
          <Grid container>
            <Grid
              item
              container
              flexDirection="column"
              gap={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sx={mainHeaderStyle}>
                Handmade {props.product.name.toLowerCase()}
              </Grid>
              <Box
                component="img"
                alt={`${props.product.name.toLowerCase()}`}
                src={props.product.image_url}
                sx={imgStyle}
              ></Box>
            </Grid>
            <Grid
              item
              container
              sx={mainContainerStyles}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap={2}
            >
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
                {props.product.description_short.split("#").map((e, index) => {
                  return (
                    <Grid item key={index}>
                      {e}
                    </Grid>
                  );
                })}
              </Grid>
              <Grid item sx={subTitleStyle} alignSelf="start">
                Description
              </Grid>
              <Grid item>{props.product.description_long}</Grid>
              <Grid item>{`£${props.product.price}`}</Grid>
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
        </Grid>
      </Container>
    </AnimatedPopUpPage>
  );
}
export default ProductDetailMobile;
