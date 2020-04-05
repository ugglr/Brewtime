import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import styled from 'styled-components';
import {View, Text, StatusBar} from 'react-native';

// Auth Screens
import SplashScreen from './src/screens/Splash';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import ForgotScreen from './src/screens/ForgotPassword';
// App Screens
import HomeScreen from './src/screens/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <NavigationContainer>
      {isLogin ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
