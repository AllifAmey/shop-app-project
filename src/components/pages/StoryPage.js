import React, { useState } from "react";
import { Grid } from "@mui/material";
import natureImg from "../../img/Storypage/nature-inspiration.avif";
import AnimatedPage from "../utility/AnimatedPage";
import Box from "@mui/material/Box";

function StoryPage() {
  /*
    https://cdn.shopify.com/s/files/1/0070/7032/files/mvmt-about-age.png?format=jpg&quality=90&v=1647467698
    https://cdn.searchenginejournal.com/wp-content/uploads/2018/08/mailchimp-about-us-page-5ec5b852e40d7.png
    https://cdn2.avada.io/media/resources/WrtbTi5.jpg <--- I chose this one for simplicity and aligning to her design.
    https://blog.hubspot.com/service/best-contact-us-pages - for contact us pages. 

    Use google map api to create the google map - scroll down to "Connect with one of our global offices"
    https://www.hubspot.com/company/contact?_ga=2.153440184.1862735785.1624414629-863205565.1624414629&hubs_post=blog.hubspot.com%2Fservice%2Fbest-contact-us-pages&hubs_post-cta=HubSpot 

    update: 
    Added some of the design , mother wanted such as increased boldness and size to the headline
    Increase the fontsize of the article content by 2px.
    She asked for the img to go up a bit. 

    */
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
              flexDirection="column"
              gap={2}
              justifyContent="center"
              alignItems="center"
              height="40%"
              width={0.6}
              textAlign="center"
              alignSelf="center"
            >
              <Grid item fontWeight={800} fontSize={36}>
                Our Story
              </Grid>
              <Grid item fontSize={20}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                ipsam id vel, sit quaerat neque dolores eveniet eos minima nam?
                sit quaerat neque dolores eveniet eos minima nam? Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Minus ipsam id
                vel, sit quaerat neque dolores eveniet eos minima nam?
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
              <Grid
                item
                container
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width={0.5}
                textAlign="center"
                gap={4}
              >
                <Grid item fontWeight={800} fontSize={36}>
                  Design Inspiration
                </Grid>
                <Grid item fontSize={20}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis perspiciatis commodi quos sunt doloribus illo, fugit
                  nemo ipsa beatae? Eveniet odio quam voluptate quod cupiditate
                  quas est, corrupti magnam aut.
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
                  sx={{
                    background: `url(${natureImg}) no-repeat
                center center/cover`,
                  }}
                ></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </AnimatedPage>
    </>
  );
}

export default StoryPage;
