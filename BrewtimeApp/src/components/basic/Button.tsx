import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

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

type Props = {
  label: string;
  variant: 'default' | 'primary';
  onPress: () => void;
};

const Button = ({label, variant, onPress}: Props) => {
  const backgroundColor =
    variant === 'primary' ? '#2CB9B0' : 'rgba(12,13,52, 0.05)';
  const color = variant === 'primary' ? 'white' : '#0C0D34';

  return (
    <RectButton style={[styles.container, {backgroundColor}]} onPress={onPress}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = {variant: 'default'};

export default Button;
