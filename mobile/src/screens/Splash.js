import React from 'react';
import styled from 'styled-components/native';

import {MAIN_BG, BLACK} from '../theme/colors';

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${MAIN_BG};
`;
const Title = styled.Text`
  font-size: 36px;
  font-weight: 600;
  color: ${BLACK};
`;

const SplashScreen = () => {
  return (
    <Container>
      <Title>Brewtime</Title>
    </Container>
  );
};

export default SplashScreen;
