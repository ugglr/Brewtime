import React, {ReactElement} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import {sideMargin} from '../responsive';
import SignUpForm from './forms/SignUpForm';

import * as fonts from '../fonts';
import * as colors from '../colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteShadow,
    flex: 1,
    paddingHorizontal: sideMargin.l,
  },
  appTitle: {
    alignSelf: 'center',
    color: colors.brown,
    marginTop: 120,
  },
  title: {
    alignSelf: 'center',
    marginTop: 52,
  },
  keyboardAvoidContainer: {
    backgroundColor: colors.whiteShadow,
  },
  loginCTAText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

type Props = {
  navigation: any;
  title: string;
  subtitle: string;
  children: ReactElement;
  bottomCTA: {
    text: string;
    linkText: string;
    destination: string;
  };
};

const FormsScreen = ({
  navigation,
  title,
  subtitle,
  children,
  bottomCTA,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[fonts.H1, fonts.bold, styles.appTitle]}>{title}</Text>
      <Text style={[fonts.H3, styles.title]}>{subtitle}</Text>
      <KeyboardAvoidingView
        behavior="position"
        contentContainerStyle={styles.keyboardAvoidContainer}>
        {children}
        <View style={styles.loginCTAText}>
          <Text style={fonts.regular}>{bottomCTA.text}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(bottomCTA.destination)}>
            <Text style={[fonts.semiBold, styles.linkText]}>
              {bottomCTA.linkText}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default FormsScreen;
