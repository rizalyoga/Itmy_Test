import { useState } from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ lati, long }) => {
  //   const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const [center] = useState({
    lat: 59.95,
    lng: 30.33,
  });
  const [zoom] = useState(11);

  return (
    <div style={{ height: "40vh", width: "100%" }}>
      <GoogleMapReact bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAP_KEY}` }} defaultCenter={lati && long ? center : { lat: lati, lng: long }} defaultZoom={zoom}>
        {/* <AnyReactComponent lat={lat} lng={lng} /> */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
