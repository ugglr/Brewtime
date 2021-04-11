import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Button from '../components/basic/Button';

import * as fonts from '../fonts';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: height * 0.15,
  },
});

type SlideProps = {
  title: string;
  body: string;
  isLast: boolean;
  onPress: () => void;
  lastOnPress: () => void;
};

const Slide = ({title, body, onPress, isLast, lastOnPress}: SlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={[fonts.H1, styles.title]}>{title}</Text>
      <Text style={fonts.P}>{body}</Text>
      <View style={styles.buttonWrapper}>
        <Button
          variant={isLast ? 'primary' : 'default'}
          label="next"
          onPress={isLast ? lastOnPress : onPress}
        />
      </View>
    </View>
  );
};

export default Slide;
