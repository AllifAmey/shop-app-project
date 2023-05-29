import ringImg from "../../../../assets/img/Homepage/ring-homepage.png";
import pinCushionImg from "../../../../assets/img/Homepage/pin-cushion-homepage.png";
import scrunchyImg from "../../../../assets/img/Homepage/scrunchy-homepage.png";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function ProductSectionMobile() {
  // https://nl.pinterest.com/pin/254664553914081575/?mt=login - inspiration

  /*
  
  docs - 
    logic for layout -
      A flexbox container that is a column container 3 other containers that are rows of height 50vh.
      Each of those 50vh contain the content displayed.
      One of the containers are row-reverse. 
      
    intention - 
    To show snippets of each product and the care with which products are shown and created with.

  future - 
    I am uncertain whether to split the components to allow different types of product or to,
    keep things as they are. This may be replaced with videos showing how each product is created.
    

    sx={{
                background: `url(${pinCushionImg}) no-repeat
                center center/cover`,
              }}
              alt="Pin Cushion Image"
   */

  const PictureStyle = {
    position: "relative",
    background: "no-repeat center center/cover",
    "&::before": {
      content: '""',
      position: "absolute",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  const textStyles = {
    position: "absolute",
    color: "white",
    left: "10%",
    top: "20%",
    height: "70%",
    width: "80%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  };
  return (
    <>
      <Box height="auto" width={1}>
        <Grid container flexDirection="column">
          <Grid item container height="50vh" position="relative">
            <Grid
              item
              width={1}
              sx={{ ...PictureStyle, backgroundImage: `url(${ringImg})` }}
            ></Grid>
            <Grid sx={textStyles}>
              <Grid fontSize="30px">Handcrafted to Perfection</Grid>
              <Grid fontSize="16px">
                In every jewellery I create has been inspected and perfected by
                me with good quality tools I use to make my jewellery.
              </Grid>
            </Grid>
          </Grid>
          <Grid item container height="50vh" position="relative">
            <Grid
              item
              width={1}
              sx={{ ...PictureStyle, backgroundImage: `url(${pinCushionImg})` }}
            ></Grid>
            <Grid sx={textStyles}>
              <Grid fontSize="30px">Created with Emotion</Grid>
              <Grid fontSize="16px">
                Every piece brings me joy and happiness because the design takes
                a long time to finalise.
              </Grid>
            </Grid>
          </Grid>
          <Grid item container height="50vh" position="relative">
            <Grid
              item
              width={1}
              sx={{ ...PictureStyle, backgroundImage: `url(${scrunchyImg})` }}
            ></Grid>
            <Grid sx={textStyles}>
              <Grid fontSize="30px">Crafted with Care</Grid>
              <Grid fontSize="16px">
                Whenever I assemble a product I ensure the jewellery will be
                unique and last for a long time.
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ProductSectionMobile;
