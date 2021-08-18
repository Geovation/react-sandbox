import GoogleMapReact from "google-map-react";

function GoogleMapsPage() {
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
          key: "AIzaSyDf6rgN-gGoCPLP6G_NHqVDAoLZ7UN2Yec",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}

export default GoogleMapsPage;
