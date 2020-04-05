import React from "react";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppContainer from "./components/AppContainer";
import LandingPage from "./components/Landing";
import Auth from "./components/Auth";

const history = createBrowserHistory();
// Replace with your Google Property ID
const trackingId = "G-CSDE3BW3C3";
// Initialize google analytics page view tracking
ReactGA.initialize(trackingId);

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
  return (
    <Router history={history}>
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
