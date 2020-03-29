import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import styled from 'styled-components';
import {View, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>Brewtime</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
