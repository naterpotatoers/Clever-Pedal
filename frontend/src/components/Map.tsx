import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Spinner } from "react-bootstrap";
const containerStyle = {
  width: "500px",
  height: "500px",
};

const center = {
  lat: 38.5586,
  lng: -121.7572,
};
function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCdO_herTm3v35fF-I8zbrxyUALb287WiI",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  ) : (
    <Spinner animation="border" />
  );
}

export default React.memo(MyComponent);
