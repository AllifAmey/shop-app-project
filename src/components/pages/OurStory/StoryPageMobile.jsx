import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import natureImg from "../../assets/img/Storypage/nature-inspiration.png";
import AnimatedPage from "../../utility/AnimatedPage";

function StoryPageMobile() {
  /*
    
    docs:
     Read StoryPage.jsx docs.
   

  */
  // the styles for the flexbox that contains text
  const textContainerStyles = {
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    textAlign: "center",
  };
  return (
    <>
      <AnimatedPage>
        <Box height="auto" width={1}>
          <Grid
            container
            flexDirection="column"
            height="100vh"
            justifyContent="space-evenly"
          >
            <Grid
              item
              container
              sx={textContainerStyles}
              gap={2}
              height="30%"
              width={0.8}
              alignSelf="center"
            >
              <Grid item fontWeight={800} fontSize={36}>
                Our Story
              </Grid>
              <Grid item fontSize={16}>
                I am a jewellery designer maker milliner teacher and a artist
                residing in the uk. I have many experience doing exhibitions in
                London. The materials I use are brass,copper and silver.
                Occasionally , I design and make mix media jewellery.
              </Grid>
            </Grid>
            <Grid
              item
              container
              sx={textContainerStyles}
              gap={2}
              height="60%"
              width={0.8}
              alignSelf="center"
            >
              <Grid
                item
                borderRadius="10px"
                component="img"
                src={natureImg}
                sx={{
                  width: "100%",
                  height: "60%",
                  objectFit: "cover",
                }}
                title="Inspiration by nature"
                alt="Nature"
              ></Grid>
              <Grid item fontWeight={800} fontSize={30}>
                Design Inspiration
              </Grid>
              <Grid item fontSize={16}>
                My inspiration comes from beautiful things I find in nature and
                blooming flowers. Initially, I will sketch my designs and then I
                will take into consideration of simplifying the jewellery as
                necessary.
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </AnimatedPage>
    </>
  );
}

export default StoryPageMobile;
