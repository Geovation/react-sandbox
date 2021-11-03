import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

export default function WebcamPage() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", padding: "10px" }}
    >
      <Grid item>
        <IconButton
          color="primary"
          aria-label="take picture"
          component="span"
          onClick={capture}
          size="large"
        >
          <PhotoCameraIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <Webcam audio={false} width={"100%"} ref={webcamRef} />
      </Grid>
      {imgSrc && (
        <Grid item>
          <img src={imgSrc} />
        </Grid>
      )}
    </Grid>
  );
}
