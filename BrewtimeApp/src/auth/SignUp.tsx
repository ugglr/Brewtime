import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {sideMargin} from '../responsive';
import SignUpForm from './SignUpForm';

import * as fonts from '../fonts';
import * as colors from '../colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offWhite,
    flex: 1,
    paddingHorizontal: sideMargin.l,
  },
  title: {
    marginTop: 32,
  },
  loginText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={[fonts.H1, styles.title]}>Sign-Up.</Text>
      <SignUpForm />
      <View style={styles.loginText}>
        <Text style={fonts.regular}>already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={[fonts.semiBold, styles.linkText]}>Login!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
