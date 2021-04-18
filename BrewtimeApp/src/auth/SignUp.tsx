import React from 'react';

import SignUpForm from './forms/SignUpForm';
import FormsScreen from './FormsScreen';

const SignUp = ({navigation}) => {
  return (
    <FormsScreen
      title="Brewtime."
      subtitle="Sign-up!"
      bottomCTA={{
        text: 'Already have an account? ',
        linkText: 'Login!',
        destination: 'login',
      }}
      {...{navigation}}>
      <SignUpForm />
    </FormsScreen>
  );
};

export default SignUp;
