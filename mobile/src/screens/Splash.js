import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SplashScreen = () => {
  return (
    <Container>
      <Text>Brewtime</Text>
    </Container>
  );
};

export default SplashScreen;
