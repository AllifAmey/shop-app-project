import {
  render,
  screen,
} from "../../../../../test-utils/testing-library-utils";

import LocationDesktop from "../utility/Desktop/LocationDesktop";

describe("LocationHomePage component", () => {
  test("check if correct text is rendered", () => {
    render(<LocationDesktop />);
    // grab the text
    const locationTitle = screen.getByText("Our Physical Location");
    const weatherTitle = screen.getByText("Weather");
    const marketLocationText = screen.getByText("Jubilee Market");
    const addressText = screen.getByText("1 Tavistock St, London WC2E 8BD");
    const daysOpenText = screen.getByText("Saturday - Sunday");
    const timeOfDayOpenText = screen.getByText("8am to 6pm!");

    // verify
    expect(locationTitle).toBeInTheDocument();
    expect(weatherTitle).toBeInTheDocument();
    expect(marketLocationText).toBeInTheDocument();
    expect(addressText).toBeInTheDocument();
    expect(daysOpenText).toBeInTheDocument();
    expect(timeOfDayOpenText).toBeInTheDocument();
  });
  test("check if correct image and icon image is rendered", () => {
    render(<LocationDesktop />);
    // grab the image using alt text
    const googleMapImage = screen.getByAltText("google map");
    const openSignImage = screen.getByAltText("open-sign");
    const weatherIcon = screen.getByAltText("Weather icon");
    // verify
    expect(googleMapImage).toBeInTheDocument();
    expect(openSignImage).toBeInTheDocument();
    expect(weatherIcon).toBeInTheDocument();
  });
});
