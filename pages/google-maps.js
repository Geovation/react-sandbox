import GoogleMapReact from "google-map-react";

export default function GoogleMapsPage() {
  const defaultProps = {
    center: {
      lat: 51.5074,
      lng: 0.1278,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}
