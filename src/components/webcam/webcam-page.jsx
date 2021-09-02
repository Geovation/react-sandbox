import React, { Fragment, useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

export default function WebcamPage() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <Fragment>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
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
        </Grid>

        <Grid item>
          <Webcam audio={false} ref={webcamRef} />
        </Grid>

        {imgSrc && (
          <Grid item>
            <img src={imgSrc} />
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
}
