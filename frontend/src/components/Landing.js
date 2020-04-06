import React from "react";
import styled from "styled-components";

import Header from "./Header";
import FeatureBlock from "./FeatureBlock";

const Container = styled.div`
  justify-content: center;
  align-items: center;
`;

const Landing = () => {
  return (
    <Container>
      <Header
        title='Brewtime.'
        title2='Keep track of your pour-overs'
        subtitle='Track, experiment and become master of your brew.'
        subscribeForm
      />
      <FeatureBlock />
    </Container>
  );
};

export default Landing;
