import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {getTranslations, AvailableLocales} from '../../locale';

import TextInput from '../../components/forms/TextInput';
import Button from '../../components/basic/Button';

const {formTranslations, signUpScreenTranslations} = getTranslations(
  AvailableLocales.en,
);

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 20,
  },
  buttonWrapper: {
    alignSelf: 'center',
    marginTop: 32,
  },
});

const SignupForm = () => {
  return (
    <Formik
      initialValues={{email: '', password: '', passwordConfirm: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <>
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

          <View style={styles.inputWrapper}>
            <TextInput
              name="passwordConfirm"
              label={formTranslations.passwordConfirmInput.label}
              placeholder={formTranslations.passwordConfirmInput.placeholder}
              value={values.passwordConfirm}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.password}
              keyboardType="default"
              secureTextEntry
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              label={signUpScreenTranslations.mainButton}
              onPress={handleSubmit}
            />
          </View>
        </>
      )}
    </Formik>
  );
};

export default SignupForm;
