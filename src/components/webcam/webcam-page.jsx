import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

function WebcamPage() {
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

export default WebcamPage;
