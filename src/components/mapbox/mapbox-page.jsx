import React, { Fragment, useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJkdWxvbWFyZmFydXEiLCJhIjoiY2tsajgxdXV2MWt2YzJ3b2lmeTdvcmNrcyJ9.sH-v970wUMTYCN6F2ymbng";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

function MapboxPage() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0.1278);
  const [lat, setLat] = useState(51.5074);
  const [zoom, setZoom] = useState(9);
  const [mapStyle, setMapStyle] = useState(
    "mapbox://styles/mapbox/streets-v11"
  );

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  const handleChange = (event) => {
    setMapStyle(event.target.value);
    map.current.setStyle(event.target.value);
  };

  return (
    <Fragment>
      <Box maxWidth="md" p={1}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="mapStyle"
            name="mapboxStyle"
            value={mapStyle}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="mapbox://styles/mapbox/streets-v11"
              control={<Radio />}
              label="Streets"
            />
            <FormControlLabel
              value="mapbox://styles/mapbox/satellite-v9"
              control={<Radio />}
              label="Satellite"
            />
            <FormControlLabel
              value="mapbox://styles/mapbox/light-v10"
              control={<Radio />}
              label="Light"
            />
            <FormControlLabel
              value="mapbox://styles/mapbox/dark-v10"
              control={<Radio />}
              label="Dark"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <div ref={mapContainer} style={{ height: "85vh", width: "100%" }} />
    </Fragment>
  );
}

export default MapboxPage;
