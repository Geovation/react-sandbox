import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import NavDrawer from "./components/common/nav-drawer";
import Footer from "./components/common/footer.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GoogleMapsPage from "./components/google-map/google-map-page.jsx";

import HomePage from "./components/home-page.jsx";
import FormPage from "./components/form/form-page.jsx";

function App() {
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
            </Switch>

            <Footer />
          </Fragment>
        }
      />
    </Router>
  );
}

export default App;
