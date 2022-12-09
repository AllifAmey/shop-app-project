import { useMemo } from "react";
import styles from "./LocationHomePage.module.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function OurLocation() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  // 51.512314743810435, -0.12369038624653797
  // docs:
  // https://developers.google.com/maps/documentation/javascript/reference/map?hl=en#MapOptions.disableDefaultUI
  // https://stackoverflow.com/questions/73361734/google-maps-and-react-style-map-controls - use options to get it.
  const center = useMemo(
    () => ({ lat: 51.512314743810435, lng: -0.12369038624653797 }),
    []
  );

  return (
    <GoogleMap
      zoom={18}
      options={{ disableDefaultUI: true, draggable: false }}
      center={center}
      mapContainerClassName="map-container"
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
