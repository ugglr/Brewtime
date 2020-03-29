import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import styled from 'styled-components';
import {View, Text, StatusBar} from 'react-native';

import SplashScreen from './src/screens/Splash';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SplashScreen />
    </NavigationContainer>
  );
};

export default App;
