import { Suspense } from "react";
import { useLoaderData, defer, Await, json } from "react-router-dom";
import HomePageDesktop from "./HomePageDesktop";
import HomePageTablet from "./HomePageTablet";
import HomePageMobile from "./HomePageMobile";
import { useOutletContext } from "react-router-dom";
import domain from "../../services/domain";
import { Helmet } from "react-helmet-async";

function HomePage() {
  /*
  docs - 
    Logic for layout - 
    essentially the image is placed in the center of a 90vh 100% container
    Another container is overlapped in that which contains the exact length and height of the image container
    This particular container that overlaps the image is used to darken the image
    On top of the image layer another layer is overlapped called center-container and location-container,
    these two containers are the text that overlaps the darken sunk background to give the illusion of ,
    the text being lifted up, the z-index is important as it directly lifts the importance of the background.


  */

  const context = useOutletContext();
  const { weather } = useLoaderData();
  return (
    <>
      <Suspense fallback={<div style={{ textAlign: "center" }}>loading..</div>}>
        <Await resolve={weather}>
          {(loadedWeather) => {
            return (
              <>
                <Helmet>
                  <meta
                    name="description"
                    content="We are a London-based family business selling handcrafted jewellery. Come visit us at Jubilee Market!"
                  />
                  <link rel="canonical" href="" />
                </Helmet>
                {context.isDesktop && (
                  <HomePageDesktop loadedWeather={loadedWeather} />
                )}
                {context.isTablet && (
                  <HomePageTablet loadedWeather={loadedWeather} />
                )}
                {context.isMobile && (
                  <HomePageMobile loadedWeather={loadedWeather} />
                )}
              </>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}

export default HomePage;

async function loadWeatherData() {
  // weather data is fetched from the openweathermap api

  const response = await fetch(`${domain}/api/shop/external`, {
    method: "POST",
    body: JSON.stringify({
      type: "weather",
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!response.ok) {
    throw json(
      { message: "Could not fetch weather" },
      { status: response.status }
    );
  } else {
    const data = await response.json();
    const icon = data.message;
    return icon;
  }
}

export function loader() {
  return defer({
    weather: loadWeatherData(),
  });
}
