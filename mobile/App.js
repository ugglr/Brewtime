import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import styled from 'styled-components';
import {View, Text, StatusBar} from 'react-native';

import SplashScreen from './src/screens/Splash';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import ForgotScreen from './src/screens/ForgotPassword';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  const foo = false;

  return (
    <NavigationContainer>{!foo ? <AuthStack /> : <></>}</NavigationContainer>
  );
};

export default App;
