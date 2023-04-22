import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import supportIcon from "../../assets/img/icons/support-icon.png";
import ideaIcon from "../../assets/img/icons/idea-icon.png";
import shopIcon from "../../assets/img/icons/shop-icon.png";

function ValuesHomePage() {
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
  const valueImageStyle = {
    height: "50px",
    width: "50px",
  };
  const valueTextStyle = {
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
              sx={valueImageStyle}
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
              sx={valueImageStyle}
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
              sx={valueImageStyle}
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
      </Box>
    </>
  );
}

export default ValuesHomePage;
