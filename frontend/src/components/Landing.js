import React from "react";
import styled from "styled-components";

import Header from "./Header";
import WideCard from "./WideCard";

const Container = styled.div``;
const MoreInfoContainer = styled.div``;

const brewData = [
  {
    img: "img",
    title: "Beans!",
    desc: "Origin, Roast, blend"
  },
  {
    img: "img",
    title: "Beans!",
    desc: "Origin, Roast, blend"
  },
  {
    img: "img",
    title: "Beans!",
    desc: "Origin, Roast, blend"
  }
];

const Landing = () => {
  return (
    <Container>
      <Header
        title='Brewtime.'
        title2='Keep track of your pour-overs'
        subtitle='Track, experiment and become master of your brew.'
        subscribeForm
      />
      <MoreInfoContainer>
        {brewData.map(o => {
          return <WideCard img={o.img} title={o.title} desc={o.desc} />;
        })}
      </MoreInfoContainer>
    </Container>
  );
};

export default Landing;
