import GoogleMapReact from 'google-map-react';
import { Grid, } from "@material-ui/core";
import { Fragment } from 'react';

function GoogleMapsPage() {
  const defaultProps = {
    center: {
      lat: 51.5074,
      lng: 0.1278
    },
    zoom: 11
  };

  return (
    <Fragment>
      <Grid item container>
        <div style={{ height: '4vh', width: '100%' }}></div>
      </Grid>
      <Grid item container justifyContent="center" alignItems="stretch" alignContent="stretch">
        <div style={{ height: '90vh', width: '100vw' }}>
          <div style={{ height: '100%', width: '100vw' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyDf6rgN-gGoCPLP6G_NHqVDAoLZ7UN2Yec" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
          </div>
        </div>
      </Grid>
      <Grid item container>
        <div style={{ height: '0.1vh', width: '100%' }}></div>
      </Grid>
    </Fragment>
  );
}

export default GoogleMapsPage;