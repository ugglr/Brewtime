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
        subtitle='For people who like their V60 a litle too much...'
      />
    </Container>
  );
};

export default Landing;
