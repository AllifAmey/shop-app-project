import React from "react";
import Grid from "@mui/material/Grid";
import natureImg from "../../assets/img/Storypage/nature-inspiration.png";
import AnimatedPage from "../../utility/AnimatedPage";
import Box from "@mui/material/Box";

function StoryPageDesktop() {
  /*
    https://cdn.shopify.com/s/files/1/0070/7032/files/mvmt-about-age.png?format=jpg&quality=90&v=1647467698
    https://cdn.searchenginejournal.com/wp-content/uploads/2018/08/mailchimp-about-us-page-5ec5b852e40d7.png
    https://cdn2.avada.io/media/resources/WrtbTi5.jpg <--- I chose this one for simplicity and aligning to her design.
    https://blog.hubspot.com/service/best-contact-us-pages - for contact us pages. 

    Use google map api to create the google map - scroll down to "Connect with one of our global offices"
    https://www.hubspot.com/company/contact?_ga=2.153440184.1862735785.1624414629-863205565.1624414629&hubs_post=blog.hubspot.com%2Fservice%2Fbest-contact-us-pages&hubs_post-cta=HubSpot 

    
    docs:
    The main component is wrapped around the animation component to bring out the animation.
    The layout logic is based solely on flexbox. 

    future plans:

    Perhaps later showcasing the educational profile of the site's owner should be added.


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
                  loading="lazy"
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
