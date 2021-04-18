import React, {ReactElement} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import * as colors from '../../colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    width: 245,
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
  },
});

const secondaryStyles = StyleSheet.create({
  border: {
    borderColor: colors.brown,
    borderWidth: 2,
  },
});

type Props = {
  label: string;
  variant: 'primary' | 'secondary' | undefined;
  onPress: () => void;
};

const getButtonBackgroundColor = (variant: string | undefined): string => {
  if (variant === 'secondary') {
    return colors.white;
  }
  return colors.brown;
};

const getButtonTextColor = (variant: string | undefined): string => {
  if (variant === 'secondary') {
    return colors.offBlack;
  }
  return colors.white;
};

const getButtonBorder = (variant: string | undefined) => {
  if (variant === 'secondary') {
    return secondaryStyles.border;
  }
};

const Button = ({label, variant, onPress}: Props): ReactElement => {
  return (
    <RectButton
      style={[
        styles.container,
        {backgroundColor: getButtonBackgroundColor(variant)},
        {...getButtonBorder(variant)},
      ]}
      onPress={onPress}>
      <Text style={[styles.label, {color: getButtonTextColor(variant)}]}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = {variant: 'default'};

export default Button;
