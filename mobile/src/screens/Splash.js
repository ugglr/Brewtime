import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Button} from 'react-native';
import styled from 'styled-components/native';

import {ScreenContainer} from '../theme/Containers';
import {BLACK} from '../theme/colors';

const Container = styled(ScreenContainer)`
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 36px;
  font-weight: 600;
  color: ${BLACK};
`;

const SplashScreen = props => {
  const {navigation} = props;

  return (
    <Container>
      <Title>Brewtime</Title>
      <Button title="Button" onPress={() => navigation.navigate('Login')} />
    </Container>
  );
};

export default SplashScreen;
