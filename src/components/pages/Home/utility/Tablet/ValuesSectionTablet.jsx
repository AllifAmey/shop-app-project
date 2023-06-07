import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useInView } from "react-intersection-observer";
import supportIcon from "../../../../assets/img/icons/support-icon.png";
import ideaIcon from "../../../../assets/img/icons/idea-icon.png";
import shopIcon from "../../../../assets/img/icons/shop-icon.png";

function ValuesSectionTablet() {
  // https://blog.hubspot.com/hs-fs/hubfs/Shopify-1.jpg?width=650&name=Shopify-1.jpg- inspiration

  /*
  docs - 
    Logic for layout -
      Essentially there is a container that is 50vh and inside of that are 3 containers
      each divded exactly by 3. Each of the divded containers contains the content which are ,
      further centered.
  
  future - 

  There is a case to split the components further but the case is very weak. Unlike the FAQ,
  I don't see split components being used often nor would there be a need to scale for it in the future.
  */

  // styles
  const valueTitleStyle = {
    fontSize: "30px",
    fontWeight: 800,
  };
  const valueTextStyle = {
    fontSize: "20px",
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
              <img
                src={ideaIcon}
                loading="lazy"
                alt="Philosophy icon"
                title="Philosophy icon"
                width="50px"
                height="50px"
              />
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
              xs={4}
              height={0.8}
              gap={1}
              padding="1rem"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={shopIcon}
                loading="lazy"
                alt="Shop icon"
                title="Shop Icon"
                width="50px"
                height="50px"
              />
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
              xs={4}
              height={0.8}
              gap={1}
              padding="1rem"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={supportIcon}
                alt="Support Icon"
                title="Support Icon"
                width="50px"
                height="50px"
                loading="lazy"
              />
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

export default ValuesSectionTablet;
