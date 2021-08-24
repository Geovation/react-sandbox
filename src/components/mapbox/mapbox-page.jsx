import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJkdWxvbWFyZmFydXEiLCJhIjoiY2tsajgxdXV2MWt2YzJ3b2lmeTdvcmNrcyJ9.sH-v970wUMTYCN6F2ymbng";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";

export default function MapboxPage() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0.1278);
  const [lat, setLat] = useState(51.5074);
  const [zoom, setZoom] = useState(9);
  const [mapStyle, setmapStyle] = useState(
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
    setmapStyle(event.target.value);
    map.current.remove();
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: event.target.value,
      center: [lng, lat],
      zoom: zoom
    });
  };

  return (
    <>
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
    </>
  );
}
