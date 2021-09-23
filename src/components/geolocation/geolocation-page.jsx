import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function GeolocationPage() {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [status, setStatus] = useState("No location found yet!");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser.");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus("");
          setLat(position.coords.latitude.toFixed(7));
          setLng(position.coords.longitude.toFixed(7));
        },
        () => {
          setStatus("Unable to retrieve your location.");
        }
      );
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "80vh" }}
      spacing={2}
    >
      <Grid item>
        <Button variant="contained" color="primary" onClick={getLocation}>
          Get Location
        </Button>
      </Grid>
      <Grid item>
        <Typography variant="h5">Coordinates</Typography>
      </Grid>
      {status && (
        <Grid item>
          <Typography>{status}</Typography>
        </Grid>
      )}
      {lat && lng && (
        <Grid item>
          <Typography gutterBottom={true}>Latitude: {lat}</Typography>
          <Typography>Longitude: {lng}</Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default GeolocationPage;
