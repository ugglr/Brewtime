import React from "react";

import AppContainer from "./components/AppContainer";
import Header from "./components/Header";

function App() {
  return (
    <AppContainer>
      <Header
        title='Brewtime'
        title2='Keep track of your pour-overs'
        subtitle='Mumble mumble...'
      />
    </AppContainer>
  );
}

export default App;
