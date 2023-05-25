import ringImg from "../../../../assets/img/Homepage/ring-homepage.avif";
import pinCushionImg from "../../../../assets/img/Homepage/pin-cushion-homepage.avif";
import scrunchyImg from "../../../../assets/img/Homepage/scrunchy-homepage.avif";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function ProductSectionDesktop() {
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

  const TitleStyle = { fontSize: "36px", fontWeight: 800 };
  const TextStyle = { fontSize: "24px" };
  return (
    <>
      <Box height="auto" width={1}>
        <Grid container flexDirection="column">
          <Grid item container height="50vh">
            <Grid item xs={6}>
              <img
                src={ringImg}
                style={{
                  height: "50vh",
                  width: "100%",
                  objectFit: "cover",
                }}
                alt="Ring"
                loading="lazy"
              />
            </Grid>
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
                  In every jewellery I create has been inspected and perfected
                  by me with good quality tools I use to make my jewellery.
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item direction="row-reverse" container height="50vh">
            <Grid item xs={6}>
              <img
                src={pinCushionImg}
                style={{
                  height: "50vh",
                  width: "100%",
                  objectFit: "cover",
                }}
                alt="Pin Cushion"
                loading="lazy"
              />
            </Grid>
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
                  Every piece brings me joy and happiness because the design
                  takes a long time to finalise.
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container height="50vh">
            <Grid item xs={6}>
              <img
                src={scrunchyImg}
                style={{
                  height: "50vh",
                  width: "100%",
                  objectFit: "cover",
                }}
                alt="Scrunchy"
                loading="lazy"
              />
            </Grid>
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
                  Whenever I assemble a product I ensure the jewellery will be
                  unique and last for a long time.
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ProductSectionDesktop;
