import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function GeolocationPage() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location.");
        }
      );
    }
  };

  return (
    <Fragment>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "80vh" }}
      >
        <Grid item>
          <Button variant="contained" color="primary" onClick={getLocation}>
            Get Location
          </Button>
        </Grid>
        <Grid item>
          <h1>Coordinates</h1>
        </Grid>
        <Grid item>
          <p>{status}</p>
        </Grid>
        <Grid item>{lat && <p>Latitude: {lat}</p>}</Grid>
        <Grid item>{lng && <p>Longitude: {lng}</p>}</Grid>
      </Grid>
    </Fragment>
  );
}

export default GeolocationPage;
