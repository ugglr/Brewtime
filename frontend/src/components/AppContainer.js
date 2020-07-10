import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';
import Footer from './Footer';

import { MAIN_BG } from './Theme/colors';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${MAIN_BG};
`;
const ContentContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  justify-content: center;
`;

const AppContainer = ({ children }) => {
  return (
    <AppWrapper>
      <Navbar showLinks />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </AppWrapper>
  );
};

export default AppContainer;
