import React from "react";
import styled from "styled-components";

import Header from "./Header";

const Container = styled.div``;

const Landing = () => {
  return (
    <Container>
      <Header
        title='Brewtime.'
        title2='Keep track of your pour-overs'
        subtitle='Track, experiment and become master of your brew.'
        subscribeForm
      />
    </Container>
  );
};

export default Landing;
