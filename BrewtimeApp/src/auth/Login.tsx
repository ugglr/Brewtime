import React from 'react';

import FormsScreen from './components/FormsScreen';
import LoginForm from './forms/LoginForm';

import {getTranslations, AvailableLocales} from '../locale';

const {loginScreenTranslations} = getTranslations(AvailableLocales.en);

const Login = ({navigation}) => {
  return (
    <FormsScreen
      title={loginScreenTranslations.title}
      subtitle={loginScreenTranslations.subtitle}
      bottomCTA={{
        text: loginScreenTranslations.bottomCTA.text,
        linkText: loginScreenTranslations.bottomCTA.linkText,
        destination: 'signUp',
      }}
      {...{navigation}}>
      <LoginForm />
    </FormsScreen>
  );
};

export default Login;
