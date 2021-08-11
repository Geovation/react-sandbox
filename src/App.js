import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Grid } from "@material-ui/core";
import HomePage from "./components/home-page.jsx";
import Footer from "./components/common/footer.jsx";
import NavDrawer from "./components/common/nav-drawer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GoogleMapsPage from "./components/google-map/google-map-page.jsx";

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavDrawer
        pageContent={
          <Fragment>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={{ minHeight: "100vh" }}
            >
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/google-map-page" component={GoogleMapsPage} />
              </Switch>
            </Grid>
            <Footer />
          </Fragment>
        }
      />
    </Router>
  );
}

export default App;
