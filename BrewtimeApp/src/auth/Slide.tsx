import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {AntIcon, Button} from '../components/basic';

import * as colors from '../colors';
import * as fonts from '../fonts';
import * as responsive from '../responsive';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsive.sideMargin.xl,
    width,
  },
  controlContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: 28,
    position: 'absolute',
    left: 0,
    top: 0,
    width,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  body: {
    textAlign: 'center',
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
  index: number;
  buttonText: string;
  onPress: () => void;
  onBackPress: () => void;
  lastOnPress: () => void;
};

const Slide = ({
  title,
  body,
  onPress,
  isLast,
  index,
  buttonText,
  onBackPress,
  lastOnPress,
}: SlideProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.controlContainer}>
        {!isLast ? (
          <TouchableOpacity>
            <AntIcon name="close" size={16} color={colors.offBlack} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {index !== 0 && (
          <TouchableOpacity onPress={onBackPress}>
            <AntIcon name="left" size={16} color={colors.offBlack} />
          </TouchableOpacity>
        )}
      </View>
      <Text style={[fonts.H1, styles.title]}>{title}</Text>
      <Text style={[fonts.P, styles.body]}>{body}</Text>
      <View style={styles.buttonWrapper}>
        <Button
          variant={isLast ? 'primary' : 'default'}
          label={buttonText}
          onPress={isLast ? lastOnPress : onPress}
        />
      </View>
    </View>
  );
};

export default Slide;
