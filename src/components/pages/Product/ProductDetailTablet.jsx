import AnimatedPopUpPage from "../../utility/AnimatedPopUpPage";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

function ProductDetailTablet(props) {
  //

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
  const imgStyle = { borderRadius: "50%", height: "350px", width: "350px" };
  const mainHeaderStyle = { fontSize: "26px" };
  const subTitleStyle = { fontSize: "20px" };
  return (
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
              alt={`${props.product.name.toLowerCase()}`}
              src={props.product.image_url}
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
              Handmade {props.product.name.toLowerCase()}
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
                  size="small"
                  variant="contained"
                  component={RouterLink}
                  to="/checkout"
                  sx={{ fontSize: "14px" }}
                >
                  Check Out
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="small"
                  variant="contained"
                  component={RouterLink}
                  to="/checkout"
                  sx={{ fontSize: "14px" }}
                >
                  Add Cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AnimatedPopUpPage>
  );
}
export default ProductDetailTablet;
