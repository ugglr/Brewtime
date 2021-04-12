import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import LoginForm from './LoginForm';

import * as fonts from '../fonts';
import * as colors from '../colors';
import * as responsive from '../responsive';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offWhite,
    flex: 1,
    paddingHorizontal: responsive.sideMargin.l,
  },
  title: {
    marginTop: 32,
  },
  registerCTAContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={[fonts.H1, styles.title]}>Login.</Text>
      <LoginForm />
      <View style={styles.registerCTAContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
          <Text style={[fonts.semiBold, styles.linkText]}>Sign-Up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
