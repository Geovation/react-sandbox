import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Container, Grid } from "@material-ui/core";
import HomePage from "./components/home-page.jsx";
import Footer from "./components/common/footer.jsx";
import NavDrawer from "./components/common/nav-drawer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import GoogleMapsPage from './components/google-map/google-map-page.jsx';

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavDrawer />
      <Container maxWidth="lg" my="auto">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          style={{ minHeight: "100vh" }}
        >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/google-map-page" component={GoogleMapsPage} />
          </Switch>
        </Grid>

      </Container>
      <Footer />
    </Router>
  );
}

export default App;
