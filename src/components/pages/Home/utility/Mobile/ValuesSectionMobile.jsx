import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useInView } from "react-intersection-observer";
import supportIcon from "../../../../assets/img/icons/support-icon.png";
import ideaIcon from "../../../../assets/img/icons/idea-icon.png";
import shopIcon from "../../../../assets/img/icons/shop-icon.png";

function ValuesSectionMobile() {
  /*
  docs - 
    Logic for layout -
      Individual values are now displayed in a flex column to fit mobile screens.
  
  future - 

  There is a case to split the components further but the case is very weak. Unlike the FAQ,
  I don't see split components being used often nor would there be a need to scale for it in the future.
  */

  // styles
  const valueTitleStyle = {
    fontSize: "20px",
    fontWeight: 800,
  };
  const valueImageStyle = {
    height: "50px",
    width: "50px",
  };
  const valueTextStyle = {
    fontSize: "16px",
    width: "80%",
    textAlign: "center",
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <>
      <Box height="auto" width={1} ref={ref}>
        {inView ? (
          <Grid container justifyContent="center" alignItems="center" width={1}>
            <Grid
              item
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height={0.8}
              padding="1rem"
            >
              <Grid
                item
                component="img"
                src={ideaIcon}
                sx={valueImageStyle}
                loading="lazy"
                alt="Philosophy icon"
              ></Grid>
              <Grid item sx={valueTitleStyle}>
                Our Philosophy
              </Grid>
              <Grid item sx={valueTextStyle}>
                Less is more. Simple is good. Beauty is in the eye of the
                beholder.
              </Grid>
            </Grid>
            <Grid
              item
              container
              flexDirection="column"
              height={0.8}
              padding="1rem"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                component="img"
                src={shopIcon}
                sx={valueImageStyle}
                loading="lazy"
                alt="Shop icon"
              ></Grid>
              <Grid item sx={valueTitleStyle}>
                Shop
              </Grid>
              <Grid item sx={valueTextStyle}>
                My shop will be focussed on jewellery and findings I make. All
                findings are good quality authentic material.
              </Grid>
            </Grid>
            <Grid
              item
              container
              flexDirection="column"
              height={0.8}
              padding="1rem"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                component="img"
                src={supportIcon}
                sx={valueImageStyle}
                loading="lazy"
                alt="Support Icon"
              ></Grid>
              <Grid item sx={valueTitleStyle}>
                Support
              </Grid>
              <Grid item sx={valueTextStyle}>
                If there any inquiries regarding the product please visit the
                contact us page or read the FAQs.
              </Grid>
            </Grid>
          </Grid>
        ) : null}
      </Box>
    </>
  );
}

export default ValuesSectionMobile;
