import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppContainer from "./components/AppContainer";
import LandingPage from "./components/Landing";
import Auth from "./components/Auth";

// Replace with your Google Property ID
const trackingId = "UA-227193315";
ReactGA.initialize(trackingId);

function App() {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route path='/auth'>
            <Auth />
          </Route>
          <Route path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
