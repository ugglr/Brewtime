import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from './src/auth/Onboarding';

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="onboarding" component={Onboarding} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
