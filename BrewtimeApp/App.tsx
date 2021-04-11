import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from './src/auth/Onboarding';
import Login from './src/auth/Login';
import SignUp from './src/auth/SignUp';

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="onboarding" component={Onboarding} />
        <AuthStack.Screen name="login" component={Login} />
        <AuthStack.Screen name="signUp" component={SignUp} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
