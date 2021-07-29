import { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";

function HomePage() {
  return (
    <Fragment>
      <Grid item>
        <Typography variant="h1">React Sandbox</Typography>
      </Grid>

      <Grid item container lg={7} justifyContent="flex-end">
        <Grid item>
          <Typography variant="h6">from Geovation</Typography>
        </Grid>
      </Grid>

      <Grid item>
        <Typography variant="h5">
          A project to showcase what's possible in React.
        </Typography>
      </Grid>
    </Fragment>
  );
}

export default HomePage;
