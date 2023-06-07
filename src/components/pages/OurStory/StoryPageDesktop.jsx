import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import natureImg from "../../assets/img/Storypage/nature-inspiration.png";
import AnimatedPage from "../../utility/AnimatedPage";

function StoryPageDesktop() {
  /*
    
    docs:
     Read StoryPage.jsx docs.

  */
  // the styles for the flexbox that contains text
  const textContainerStyles = {
    flexDirection: "column",
    justifyContent: "center",
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
            marginBottom="2rem"
          >
            <Grid
              item
              container
              sx={textContainerStyles}
              gap={2}
              height="40%"
              width={0.6}
              alignSelf="center"
            >
              <Grid item fontWeight={800} fontSize={36}>
                Our Story
              </Grid>
              <Grid item fontSize={20}>
                I am a jewellery designer maker milliner teacher and a artist
                residing in the uk. I have many experience doing exhibitions in
                London. The materials I use are brass,copper and silver.
                Occasionally , I design and make mix media jewellery.
              </Grid>
            </Grid>
            <Grid
              item
              container
              width={0.9}
              justifyContent="center"
              alignSelf="center"
              gap={2}
              flexWrap="nowrap"
              height="60%"
            >
              <Grid item container sx={textContainerStyles} width={0.5} gap={4}>
                <Grid item fontWeight={800} fontSize={36}>
                  Design Inspiration
                </Grid>
                <Grid item fontSize={20}>
                  My inspiration comes from beautiful things I find in nature
                  and blooming flowers. Initially, I will sketch my designs and
                  then I will take into consideration of simplifying the
                  jewellery as necessary.
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                width={0.5}
                height={1}
              >
                <Grid
                  item
                  width={0.9}
                  height={0.95}
                  borderRadius="20px"
                  component="img"
                  src={natureImg}
                  sx={{
                    objectFit: "cover",
                  }}
                  alt="Nature"
                ></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </AnimatedPage>
    </>
  );
}

export default StoryPageDesktop;
