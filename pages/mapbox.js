import React, { Fragment, useRef, useEffect, useState } from "react";
import Head from "next/head";
import mapboxgl from "!mapbox-gl";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API;

export default function MapboxPage() {
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
      zoom: zoom,
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
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.5.1/mapbox-gl.css"
          rel="stylesheet"
        ></link>
      </Head>
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
