import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Button} from 'react-native';

import {ScreenContainer} from '../theme/Containers';
import {Title} from '../theme/text';

const Login = props => {
  const {navigation} = props;

  return (
    <ScreenContainer>
      <Title>Login</Title>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Forgot Password?"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
    </ScreenContainer>
  );
};

export default Login;
