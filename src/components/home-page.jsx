import { Fragment } from "react";
import { Grid, Typography, Card, Box } from "@material-ui/core";

function HomePage() {
  return (
    <Fragment>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Card style={{ backgroundColor: "#ffa726", margin: "20px" }}>
          <Grid item p={1}>
            <Box p={2}>
              <Typography variant="h2">React Sandbox</Typography>
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
      </Grid>
    </Fragment>
  );
}

export default HomePage;
