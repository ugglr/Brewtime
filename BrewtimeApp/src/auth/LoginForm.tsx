import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';

import TextInput from '../../components/forms/TextInput';
import Button from '../../components/basic/Button';

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 20,
  },
  buttonWrapper: {
    marginTop: 32,
  },
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <>
          <View style={styles.inputWrapper}>
            <TextInput
              name="email"
              label="Email"
              placeholder="example@email.com"
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
              label="Password"
              placeholder="password123"
              value={values.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.password}
              keyboardType="default"
              secureTextEntry
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Button onPress={handleSubmit} title="Login" />
          </View>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
