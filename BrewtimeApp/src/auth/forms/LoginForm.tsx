import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';

import TextInput from '../../components/forms/TextInput';
import Button from '../../components/basic/Button';

import {getTranslations, AvailableLocales} from '../../locale';

const {formTranslations, loginScreenTranslations} = getTranslations(
  AvailableLocales.en,
);

const styles = StyleSheet.create({
  formsContainer: {
    width: '100%',
  },
  inputWrapper: {
    marginTop: 20,
  },
  buttonWrapper: {
    alignSelf: 'center',
    marginTop: 32,
  },
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <View style={styles.formsContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              name="email"
              label={formTranslations.emailInput.label}
              placeholder={formTranslations.emailInput.placeholder}
              value={values.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.email}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              name="password"
              label={formTranslations.passwordInput.label}
              placeholder={formTranslations.passwordInput.placeholder}
              value={values.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.password}
              keyboardType="default"
              secureTextEntry
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              label={loginScreenTranslations.mainButton}
              variant="primary"
              onPress={handleSubmit}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
