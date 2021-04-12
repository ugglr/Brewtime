import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';

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
  lottieContainer: {
    position: 'absolute',
    top: 0,
    width,
  },
  lottie: {
    alignSelf: 'center',
    width: width * 0.8,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  darkContent: {
    color: colors.whiteShadow,
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
  lottie?: string;
  isDark?: boolean;
  onPress: () => void;
  onBackPress: () => void;
  lastOnPress: () => void;
  onClosePress: () => void;
};

const Slide = ({
  title,
  body,
  onPress,
  isLast,
  index,
  buttonText,
  lottie,
  isDark,
  onBackPress,
  lastOnPress,
  onClosePress,
}: SlideProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.controlContainer}>
        {!isLast ? (
          <TouchableOpacity onPress={onClosePress}>
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
      {!!lottie && (
        <View style={styles.lottieContainer}>
          <LottieView source={lottie} autoPlay loop style={styles.lottie} />
        </View>
      )}
      <Text style={[fonts.H1, styles.title, isDark && styles.darkContent]}>
        {title}
      </Text>
      <Text style={[fonts.P, styles.body, isDark && styles.darkContent]}>
        {body}
      </Text>
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
