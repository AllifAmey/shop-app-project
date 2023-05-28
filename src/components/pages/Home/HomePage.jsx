import { Suspense } from "react";
import { useLoaderData, defer, Await, json } from "react-router-dom";
import HomePageDesktop from "./HomePageDesktop";
import HomePageTablet from "./HomePageTablet";
import HomePageMobile from "./HomePageMobile";
import { useOutletContext } from "react-router-dom";

/*
https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f22e96be8bc2cc5785b_6002086f72b7277a6401e43e_sobremesa.jpeg - look at the white arrow at the bottom. Maybe add that.
https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f2158f4bbbcec10c88f_6002086f72b727f54401e412_space-posters.jpeg - look at the bottom right , add that most likely

https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f23208b459df8790224_6002086f72b7270da901e44a_personalized-cans.jpeg - maybe as inspiration ? Not sure. 

!IMPORTANT FEATURE TO ADD:

Add video to the homepage to show examples of making the jewellery.
*/

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

  future - 
    possible improvements could be the styling of the button but other than that not much.
  
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
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
  // weather data is fetched from the openweathermap api
  // TODO: Make the request in the backend
  // TODO: Restrict access to apis allowed_host to particular websites.
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`
  );
  if (!response.ok) {
    throw json(
      { message: "Could not fetch weather" },
      { status: response.status }
    );
  } else {
    const data = await response.json();
    const icon = data.weather["0"].icon;
    return icon;
  }
}

export function loader() {
  return defer({
    weather: loadWeatherData(),
  });
}
