import React from 'react';

import SignUpForm from './forms/SignUpForm';
import FormsScreen from './components/FormsScreen';

import {getTranslations, AvailableLocales} from '../locale';

const {signUpScreenTranslations} = getTranslations(AvailableLocales.en);

const SignUp = ({navigation}) => {
  return (
    <FormsScreen
      title={signUpScreenTranslations.title}
      subtitle={signUpScreenTranslations.subtitle}
      bottomCTA={{
        text: signUpScreenTranslations.bottomCTA.text,
        linkText: signUpScreenTranslations.bottomCTA.linkText,
        destination: 'login',
      }}
      {...{navigation}}>
      <SignUpForm />
    </FormsScreen>
  );
};

export default SignUp;
