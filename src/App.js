import React, { Fragment, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import NavDrawer from "./components/common/nav-drawer";
import Footer from "./components/common/footer.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { preloadAuth, useFirebaseApp } from "reactfire";

import HomePage from "./components/home-page.jsx";
import FormPage from "./components/form/form-page.jsx";
import GoogleMapsPage from "./components/google-map/google-map-page.jsx";
import AuthPage from "./components/auth/auth-page.jsx";
import MapboxPage from "./components/mapbox/mapbox-page.jsx";

function App() {
  const firebaseApp = useFirebaseApp();

  useEffect(async () => {
    await preloadAuth({ firebaseApp });
  }, []);

  return (
    <Router>
      <CssBaseline />
      <NavDrawer
        pageContent={
          <Fragment>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/google-map-page" component={GoogleMapsPage} />
              <Route path="/form-page" component={FormPage} />
              <Route path="/auth" component={AuthPage} />
              <Route path="/mapbox-page" component={MapboxPage} />
            </Switch>

            <Footer />
          </Fragment>
        }
      />
    </Router>
  );
}

export default App;
