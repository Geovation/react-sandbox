import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import NavDrawer from "./components/common/nav-drawer";
import Footer from "./components/common/footer.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { preloadAuth, useFirebaseApp } from "reactfire";
import "firebase/auth";

import HomePage from "./components/home-page.jsx";
import FormPage from "./components/form/form-page.jsx";
import GoogleMapsPage from "./components/google-map/google-map-page.jsx";
import AuthPage from "./components/auth/auth-page.jsx";

const preloadSDKs = (firebaseApp) => {
  return Promise.all([preloadAuth({ firebaseApp })]);
};

function App() {
  const firebaseApp = useFirebaseApp();
  preloadSDKs(firebaseApp);

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
              <Route path="/auth">
                <AuthPage />
              </Route>
            </Switch>

            <Footer />
          </Fragment>
        }
      />
    </Router>
  );
}

export default App;
