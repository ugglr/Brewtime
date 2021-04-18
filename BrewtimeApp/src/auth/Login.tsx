import React from 'react';

import FormsScreen from './FormsScreen';
import LoginForm from './forms/LoginForm';

const Login = ({navigation}) => {
  return (
    <FormsScreen
      title="Brewtime."
      subtitle="Login."
      bottomCTA={{
        text: "Don't have an account? ",
        linkText: 'Sign-up!',
        destination: 'signUp',
      }}
      {...{navigation}}>
      <LoginForm />
    </FormsScreen>
  );
};

export default Login;
