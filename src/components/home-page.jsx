import { Fragment } from "react";
import { Grid, Typography, Card, Box } from "@material-ui/core";

function HomePage() {
  return (
    <Fragment>
      <Card style={{ backgroundColor: "#ffa726" }}>
        <Grid item p={1}>
          <Box p={2}>
            <Typography variant="h1">React Sandbox</Typography>
          </Box>
        </Grid>

        <Grid item container justifyContent="flex-end">
          <Grid item>
            <Box p={2}>
              <Typography variant="h6">from Geovation</Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid item>
          <Box p={2}>
            <Typography variant="h5">
              A project to showcase what's possible in React.
            </Typography>
          </Box>
        </Grid>
      </Card>
    </Fragment>
  );
}

export default HomePage;
