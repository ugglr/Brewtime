import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { MAIN_BG } from "./Theme/colors";

const Body = styled.body`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${MAIN_BG};
`;
const ContentContainer = styled.div`
  flex: 1 0 auto;
  width: 100%;
`;

const AppContainer = props => {
  return (
    <Body>
      <Navbar />
      <ContentContainer>{props.children}</ContentContainer>
      <Footer />
    </Body>
  );
};

export default AppContainer;
